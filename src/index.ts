#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { marked } from "marked";
import { template as templateResolver } from "lodash-es";
import { DocumentLink, Links, SideBarConfig } from "./sidebar.js";
import { VersionConfig } from "./version.js";
import toolbarTemplate from "./templates/toolbar/index.js";
import footerTemplate from "./templates/footer/index.js";
import styleTemplate, { templateVariables as styleTemplateVariables, TemplateVariables as StyleTemplateVariables} from "./templates/style/index.js";
import metaTemplate from "./templates/meta/index.js";
import categoryTemplate from "./templates/category/index.js";
import frontpageTemplate from "./templates/frontpage/index.js";
import documentTemplate from "./templates/document/index.js";
import sidebarTemplate from "./templates/sidebar/index.js";
import versionTemplate from "./templates/version/index.js";

const compiledToolbarTemplate = templateResolver(toolbarTemplate);
const compiledFooterTemplate = templateResolver(footerTemplate);
const compiledStyleTemplate = templateResolver(styleTemplate);
const compiledMetaTemplate = templateResolver(metaTemplate);
const compiledCategoryTemplate = templateResolver(categoryTemplate);
const compiledFrontpageTemplate = templateResolver(frontpageTemplate);
const compiledDocumentTemplate = templateResolver(documentTemplate);
const compiledSidebarTemplate = templateResolver(sidebarTemplate);
const compiledVersionTemplate = templateResolver(versionTemplate);

interface DocumentVersionAndPackageName {
    /**
     * Package name
     */
    package: string;

    /**
     * Package version
     */
    version: string;
}

interface ToolbarLink {
    /**
     * The href attribute
     */
    href: string;

    /**
     * The string used as content in the anchor content
     */
    title: string;
}

export interface StaticDocsConfig {
    /**
     * The root directory of the project
     */
    root: string;

    /**
     * The docs directory for the project docs (relative to root)
     */
    docs: string;

    /**
     * The target directory of the project docs site (relative to root)
     */
    target: string;

    /**
     * The configuration for the sidebar
     */
    sidebar: SideBarConfig;

    /**
     * The baseUrl of the site
     * e.g. "https://microsoft.github.io/static-docs";
     */
    baseUrl: string;

    /**
     * The GitHub repository url
     */
    githubUrl: string;

    /**
     * The versions of your project
     */
    versions: VersionConfig;

    /**
     * The title to use for the project
     */
    projectTitle: string;

    /**
     * The content for the front page
     */
    frontpageContent: string;

    /**
     * Links for the toolbar
     */
    toolbarLinks?: Array<ToolbarLink>;

    /**
     * CSS variable overrides
     */
    cssVariables?: Partial<StyleTemplateVariables>;
}

export class StaticDocs {
    private root: string;
    private docs: string;
    private target: string;
    private versions: VersionConfig;
    private sidebar: SideBarConfig;
    private baseUrl: string;
    private githubUrl: string;
    private projectTitle: string;
    private frontpageContent: string;
    private toolbarLinks: Array<ToolbarLink>;
    private cssVariables: Partial<StyleTemplateVariables>;

    constructor(config: StaticDocsConfig) {
        this.root = config.root;
        this.docs = config.docs;
        this.target = config.target;
        this.versions = config.versions;
        this.sidebar = config.sidebar;
        this.baseUrl = config.baseUrl;
        this.githubUrl = config.githubUrl;
        this.projectTitle = config.projectTitle;
        this.frontpageContent = config.frontpageContent;
        this.toolbarLinks = config.toolbarLinks || [];
        this.cssVariables = {
            ...styleTemplateVariables,
            ...(config.cssVariables || {})
        }
    }

    /**
     * Generate the documentation site
     */
    public generate() {
        this.generateFrontPage();
        this.generateDocumentationPages();
    }

    /**
     * Generates the front page using webpack
     */
    private generateFrontPage(): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.ensureDirSync(this.target);
            fs.writeFileSync(
                path.resolve(this.target, "index.html"),
                compiledFrontpageTemplate({
                    metaTemplate: compiledMetaTemplate({
                        projectTitle: this.projectTitle,
                        baseUrl: this.baseUrl,
                        githubUrl: this.githubUrl,
                    }),
                    styleTemplate: compiledStyleTemplate(
                        this.cssVariables
                    ),
                    toolbarTemplate: compiledToolbarTemplate({
                        projectTitle: this.projectTitle,
                        baseUrl: this.baseUrl,
                        githubUrl: this.githubUrl,
                        links: this.toolbarLinks,
                    }),
                    content: this.frontpageContent,
                    footerTemplate: compiledFooterTemplate({
                        githubUrl: this.githubUrl
                    })
                })
            );
            // TODO: copy over favicons etc. other linked items
            resolve();
        });
    }

    /**
     * Generates the documentation pages using webpack
     */
    private generateDocumentationPages(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await this.convertMarkdownDocumentation(this.sidebar.links, false);
            resolve();
        });
    }

    /**
     * Converts a markdown file to an html string
     */
    private getHTMLStringFromMarkdownPath(
        markdownPath: string,
        targetPath: string
    ): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.ensureDir(targetPath)
                .then(() => {
                    fs.readFile(markdownPath, "utf8", (err, data) => {
                        if (err) {
                            throw err;
                        }
                        resolve(marked.parse(data));
                    });
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * Returns an object with `version` and `package` strings if a path is tied to
     * a specific version, otherwise returns null.
     */
    private getDocumentVersionAndPackageName(path: string): null | DocumentVersionAndPackageName {
        const pathItems = path.split("/");
        const foundVersion = pathItems.findIndex(pathItem => {
            return pathItem.match(/\d+\.x/);
        });

        if (foundVersion !== -1) {
            return {
                version: pathItems[foundVersion],
                package: pathItems[foundVersion - 1],
            };
        }

        return null;
    }

    private getTemplateOptions(
        documentationItem: Links,
        versionInfo?,
        html?: string,
    ): any {
        return {
            content: html,
            scripts: (documentationItem as DocumentLink)?.scripts || [],
            stylesheets: (documentationItem as DocumentLink)?.stylesheets || [],
            toolbarTemplate: compiledToolbarTemplate({
                baseUrl: this.baseUrl,
                githubUrl: this.githubUrl,
                projectTitle: this.projectTitle,
                links: this.toolbarLinks,
            }),
            footerTemplate: compiledFooterTemplate({
                githubUrl: this.githubUrl
            }),
            styleTemplate: compiledStyleTemplate(
                this.cssVariables
            ),
            metaTemplate: compiledMetaTemplate({
                baseUrl: this.baseUrl,
                githubUrl: this.githubUrl,
                projectTitle: this.projectTitle,
            }),
            sidebar: compiledSidebarTemplate({
                sidebar: this.sidebar,
                currentPath: documentationItem.path,
                baseUrl: this.baseUrl,
                projectTitle: this.projectTitle,
            }),
            versionInfo:
                versionInfo !== null
                    ? compiledVersionTemplate({
                        versionInfo,
                        baseUrl: this.baseUrl,
                    })
                    : null,
            baseUrl: this.baseUrl,
        }
    }

    /**
     * Converts a document from markdown to HTML
     *
     * @param {object} documentationItem
     * @param {string} template
     * @returns Promise
     */
    private convertDocument(
        documentationItem: DocumentLink,
        isVersionDoc
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getHTMLStringFromMarkdownPath(
                path.resolve(this.docs, `${documentationItem.path}.md`),
                path.resolve(this.target, "docs", documentationItem.path),
            )
                .then(html => {
                    const versionAndPackageName = this.getDocumentVersionAndPackageName(
                        documentationItem.path
                    );
                    let versionInfo = null;

                    if (versionAndPackageName !== null) {
                        versionInfo = {
                            package: versionAndPackageName.package,
                            docVersion: versionAndPackageName.version,
                            otherAvailableVersions: this.versions[
                                versionAndPackageName.package
                            ].versions
                                .filter(value => {
                                    return value !== versionAndPackageName.version;
                                })
                                .reduce((previousValue, nextValue) => {
                                    previousValue.push({
                                        path: documentationItem.path.replace(
                                            versionAndPackageName.version,
                                            nextValue
                                        ),
                                        label: nextValue,
                                    });
                                    return previousValue;
                                }, []),
                        };
                    }

                    const docFile = {
                        type: "doc",
                        path: documentationItem.path,
                        html: compiledDocumentTemplate({
                            index: "",
                            ...this.getTemplateOptions(
                                documentationItem,
                                versionInfo,
                                html,
                            ),
                        }),
                        scripts: documentationItem.scripts,
                        stylesheets: documentationItem.stylesheets
                    };

                    fs.ensureDir(path.resolve(this.target, "docs", docFile.path))
                        .then(() => {
                            fs.writeFileSync(
                                path.resolve(this.target, "docs", docFile.path, "index.html"),
                                docFile.html
                            );
                        })
                        .finally(() => {
                            resolve();
                        })
                        .catch(err => {
                            reject(err);
                        });

                    if (versionInfo && versionInfo.otherAvailableVersions && !isVersionDoc) {
                        this.convertMarkdownDocumentation(
                            versionInfo.otherAvailableVersions.reduce(
                                (previousValue, nextValue) => {
                                    previousValue.push({
                                        type: "doc",
                                        label: documentationItem.label,
                                        path: nextValue.path,
                                    });

                                    return previousValue;
                                },
                                []
                            ),
                            true
                        );
                    }

                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * Converts markdown documentation item, either a category or document
     */
    private convertMarkdownDocumentation(
        category: Array<Links>,
        isVersionDoc
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            category.forEach(documentationItem => {
                if (documentationItem.type === "category") {
                    const items = documentationItem.items.reduce(
                        (previousValue, nextDocumentationItem) => {
                            previousValue.push({
                                label: nextDocumentationItem.label,
                                path: nextDocumentationItem.path,
                            });
                            return previousValue;
                        },
                        []
                    );

                    const catFile = {
                        type: "category",
                        path: documentationItem.path,
                        html: compiledDocumentTemplate({
                            index: compiledCategoryTemplate({
                                items,
                                label: documentationItem.label,
                                description: documentationItem.description,
                                baseUrl: this.baseUrl,
                            }),
                            ...this.getTemplateOptions(
                                documentationItem,
                                null
                            ),
                        }),
                    };

                    fs.ensureDir(path.resolve(this.target, "docs", catFile.path))
                        .then(() => {
                            fs.writeFileSync(
                                path.resolve(this.target, "docs", catFile.path, "index.html"),
                                catFile.html
                            );
                        })
                        .finally(() => {
                            resolve();
                        })
                        .catch(err => {
                            reject(err);
                        });

                    this.convertMarkdownDocumentation(documentationItem.items, isVersionDoc);
                } else if (documentationItem.type === "doc") {
                    this.convertDocument(documentationItem, isVersionDoc).then(() => {
                        resolve();
                    });
                } else {
                    reject("Unrecognizable type used in sidebar");
                }
            });
        });
    }
}
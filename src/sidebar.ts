export type Links = CategoryLink | DocumentLink;

export interface DocumentLink {
    /**
     * Type of link
     */
    type: "doc";

    /**
     * The readable label used in the sidebar UI
     * e.g. "Example Document"
     */
    label: string;
    
    /**
     * The path to the file the doc is referencing without the ".md"
     * e.g. "path/to/example"
     */
    path: string;
}

export interface CategoryLink {
    /**
     * Type of link
     */
    type: "category";

    /**
     * The readable label used in the sidebar UI
     * e.g. "Example Category"
     */
    label: string;

    /**
     * The path to the folder the category is referencing
     * e.g. "path/to/example"
     */
    path: string;

    /**
     * A description that will show up as a paragraph on the category page
     */
    description: string;

    /**
     * The list of documents in this category,
     * At present this can only go one level deep
     */
    items: Array<DocumentLink>;
}

export interface SideBarConfig {
    links: Array<Links>;
}
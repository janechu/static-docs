import path from "path";
import { StaticDocs } from "../dist/esm/index.js";
import { ghPagesBaseUrl, githubUrl } from "./constants.js";
import frontpageContent from "../docs-files/frontpage.js";
import sidebar from "../docs-files/sidebar.js";

const __dirname = process.cwd();
const baseUrl = process.env.npm_lifecycle_event.includes("gh-pages")
    ? ghPagesBaseUrl
    : "";

const staticDocs = new StaticDocs({
    root: path.resolve(__dirname),
    docs: path.resolve(__dirname, "docs-files"),
    target: path.resolve(__dirname, "docs"),
    projectTitle: "Static Docs",
    sidebar,
    baseUrl,
    githubUrl,
    version: {
        "static-docs": {
            versions: [
                "0.x.0"
            ]
        }
    },
    frontpageContent,
});

staticDocs.generate();

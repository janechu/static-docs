# Getting Started

## Installation

```bash
npm install static-docs
```

## Usage

As this file reads markdown files for conversion, it is intended to be executed via a `NodeJS` script.

Example:

build/generate-docs.js
```js
import path from "path";
import { StaticDocs } from "static-docs";

const ghPagesBaseUrl = "https://username.github.io/my-project";
const githubUrl = "https://github.com/username/my-project";
const __dirname = process.cwd();

const staticDocs = new StaticDocs({
    root: path.resolve(__dirname),
    docs: path.resolve(__dirname, "docs-files"),
    target: path.resolve(__dirname, "docs"),
    sidebar: {
        links: [
            {
                type: "doc",
                label: "Introduction",
                path: "introduction", // this assumes you have one introduction.md file in your docs folder
            },
        ]
    },
    baseUrl: ghPagesBaseUrl,
    githubUrl,
    frontpageContent: "my frontpage",
});

staticDocs.generate();
```

Command line:
```bash
node build/generate-docs.js
```

See the [configuration](./configuration) page for details on how to use the `StaticDocs` export.
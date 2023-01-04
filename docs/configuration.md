# Configuration

## StaticDocs

The `StaticDocs` export can be imported and used to configure and generate a static site from markdown.

Example:
```js
import { StaticDocs } from "static-docs";

const staticDocs = new StaticDocs({
    ...options
});

staticDocs.generate();
```

| option | description | required | type | example |
|-|-|-|-|-|
|**root**| A path to the root of the project | yes | `string` | `path.resolve(__dirname)` |
|**docs**| A path to the docs folder which contains the markdown files | yes | `string` | `path.resolve(__dirname, "docs")` |
|**target**|The target path for the generated HTML files | yes | `string` | `path.resolve(__dirname, "www")` |
|**projectTitle**| The title of the project | yes | `string` | `"My Project"` |
|**baseUrl**| The base URL used for navigation, if your site exists at `https://www.example.com` this would be your base URL | yes | `string` | `"https://www.example.com"` |
|**githubUrl**|At this time we are assuming your project is hosted on GitHub. This should be the link to your repository| yes | `string` |`"https://github.com/myusername/myprojectname"` |
|**frontpageContent**| The front page content is consumed as a string, this can be any HTML however | yes | `string` | `"<h1>My Project</h1><p>Welcome to the documentation site for my project.</p>` |
|**sidebar**| The sidebar serves as both the navigation for your documentation and as a means of letting the `StaticDocs` instance know what files you would like included. Note that only one level of categories is permitted at this time as to not run into issues with nesting | yes | [`SideBarConfig`](https://github.com/janechu/static-docs/blob/main/src/sidebar.ts) | see type |

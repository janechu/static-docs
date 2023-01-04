/**
 * This file generates the export files in the src folder for consumption
 */
import fs from "fs-extra";
import path from "path";

const __dirname = process.cwd();
const appDir = path.resolve(__dirname, "src");
[
    path.resolve(appDir, "templates/toolbar/index.html"),
    path.resolve(appDir, "templates/footer/index.html"),
    path.resolve(appDir, "templates/document/index.html"),
    path.resolve(appDir, "templates/frontpage/index.html"),
    path.resolve(appDir, "templates/style/index.html"),
    path.resolve(appDir, "templates/meta/index.html"),
    path.resolve(appDir, "templates/category/index.html"),
    path.resolve(appDir, "templates/sidebar/index.html"),
    path.resolve(appDir, "templates/version/index.html")
].map((template) => {
    const templateContents = 
`/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = \`${fs.readFileSync(template, "utf-8")}\`;
export default template;
`;
    fs.writeFileSync(template.replace(".html", ".ts"), templateContents);
});

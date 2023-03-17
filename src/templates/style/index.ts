/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<style>
    body,
    html {
        margin: 0;
        padding: 0;
    }

    .static-docs {
        <%- sdLinkColor %>: #ebedf0;
        <%- sdAccentLinkColor %>: #fb356d;
        <%- sdFontColor %>: #f5f6f7;
        <%- sdFontFamily %>: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
            Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        <%- sdFontFamilyMonospace %>: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        <%- sdBackgroundColorLayer1 %>: #18191a;
        <%- sdBackgroundColorLayer2 %>: #242526;
        <%- sdBackgroundColorLayer3 %>: hsla(0, 0%, 100%, 0.sd-05);
        <%- sdFooterBackgroundColor %>: #303846;
        <%- sdFooterColor %>: #ebefd0;
        <%- sdFooterHeight %>: 220px;
        <%- sdSpacingVertical %>: 20px;
        <%- sdTableBackground %>: transparent;
        <%- sdTableBorderWidth %>: 1px;
        <%- sdTableBorderColor %>: #606770;
        <%- sdTableHeadBackground %>: inherit;
        <%- sdTableHeadColor %>: inherit;
        <%- sdTableHeadFontWeight %>: 700;
        <%- sdTableCellPadding %>: 10px;
        <%- sdSidebarBorderColor %>: #606770;
        <%- sdSidebarWidth %>: 300px;
        <%- sdSidebarLinkActiveBackgroundColor %>: var(<%- sdBackgroundColorLayer3 %>);
        <%- sdSidebarBackgroundColor %>: var(<%- sdBackgroundColorLayer2 %>);
        <%- sdToolbarBackgroundColor %>: var(<%- sdBackgroundColorLayer2 %>);
        <%- sdToolbarShadow %>: 0 1px 2px 0 rgba(0, 0, 0, 0.sd-1);
        <%- sdToolbarHeight %>: 60px;
        <%- sdCategoryBorderColor %>: #444950;
        <%- sdCategoryBackgroundColor %>: var(<%- sdBackgroundColorLayer2 %>);
        <%- sdCategoryBorderRadius %>: 10px;
        <%- sdTableCaptionBackgroundColor %>: var(<%- sdBackgroundColorLayer3 %>);
        <%- sdCodeBackground %>: #333437;
        <%- sdCodeBorderRadius %>: 6px;
        <%- sdCodeBlockBackground %>: rgb(41, 45, 62);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background: var(<%- sdBackgroundColorLayer1 %>);
        color: var(<%- sdFontColor %>);
        font-family: var(<%- sdFontFamily %>);
    }

    .static-docs p {
        line-height: 24px;
    }

    .sd-toolbar {
        position: sticky;
        top: 0;
    }

    .sd-toolbar .sd-section {
        display: flex;
        padding: 0 15px;
    }

    .static-docs header nav {
        display: flex;
        height: var(<%- sdToolbarHeight %>);
        justify-content: space-between;
        background-color: var(<%- sdToolbarBackgroundColor %>);
        box-shadow: var(<%- sdToolbarShadow %>);
    }

    .static-docs header nav ul {
        display: flex;
        padding: 15px 0;
    }

    .static-docs header nav li {
        padding: 0 10px;
    }

    .sd-icon {
        height: 20px;
        width: 18px;
        fill: var(<%- sdLinkColor %>);
    }

    .static-docs a:hover .sd-icon {
        fill: var(<%- sdAccentLinkColor %>);
    }

    .sd-sidebar {
        width: var(<%- sdSidebarWidth %>);
        min-width: var(<%- sdSidebarWidth %>);
        border-right: 1px solid var(<%- sdSidebarBorderColor %>);
        min-height: calc(100vh - var(<%- sdToolbarHeight %>) - var(<%- sdFooterHeight %>) - 30px);
        overflow: auto;
    }

    .sd-sidebar nav {
        margin-inline-start: -20px;
    }

    .sd-sidebar nav > ul {
        margin: 20px 0;
    }

    .sd-sidebar a {
        display: flex;
        line-height: 1.sd-25;
        flex: 1;
        padding: 10px 15px;
        border-radius: 5px;
        color: var(<%- sdLinkColor %>);
    }

    .sd-sidebar .sd-active {
        background: var(<%- sdSidebarLinkActiveBackgroundColor %>);
    }

    .sd-category {
        margin: var(<%- sdSpacingVertical %>) 0;
        padding: 0;
        display: flex;
        row-gap: 15px;
        column-gap: 15px;
        flex-wrap: wrap;
    }

    .sd-category li {
        border: 1px solid var(<%- sdCategoryBorderColor %>);
        background: var(<%- sdCategoryBackgroundColor %>);
        box-shadow: 0 1.sd-5px 3px 0 rgb(0 0 0 / 15%);
        padding: 20px;
        border-radius: var(<%- sdCategoryBorderRadius %>);
        width: 200px;
    }

    .sd-category li a {
        color: var(<%- sdLinkColor %>);
    }

    .sd-category a,
    .sd-toolbar a,
    .sd-sidebar a,
    footer a {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }

    .static-docs a {
        color: var(<%- sdLinkColor %>);
        text-decoration: none;
    }

    .static-docs a:hover {
        color: var(<%- sdAccentLinkColor %>);
    }

    .static-docs main {
        display: flex;
        margin: 0 25px 0 5px;
    }

    .static-docs main > .sd-container {
        padding: 25px;
    }

    .static-docs main div a {
        color: var(<%- sdAccentLinkColor %>);
    }

    .static-docs main ul {
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }

    .sd-container {
        max-width: 900px;
    }

    .sd-content ul {
        list-style: inherit;
    }

    .sd-frontpage {
        margin: var(<%- sdSpacingVertical %>);
    }

    .sd-card-container {
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        margin: 50px 0;
    }

    .sd-card {
        background: var(<%- sdBackgroundColorLayer3 %>);
        border-radius: 5px;
        padding: 0 20px;
        width: 300px;
    }

    .sd-mobile-overlay {
        display: none;
    }

    .sd-mobile-control {
        display: none;
    }

    .sd-mobile-toggle {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;
        padding: 0;
        display: none;
    }

    .static-docs ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .static-docs li {
        line-height: 26px;
    }

    .static-docs h1 {
        margin: var(<%- sdSpacingVertical %>) 0;
    }

    .static-docs footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 15px;
        padding: 15px;
        min-height: var(<%- sdFooterHeight %>);
        background-color: var(<%- sdFooterBackgroundColor %>);
        color: var(<%- sdFooterColor %>);
    }

    .static-docs footer .sd-links {
        display: flex;
        justify-content: space-around;
        column-gap: 15px;
    }

    .static-docs footer .sd-links svg {
        margin-inline-start: 5px;
        position: relative;
        top: 1px;
    }

    .static-docs footer .sd-copyright {
        text-align: center;
    }

    .static-docs table {
        border-collapse: collapse;
        display: block;
        margin: var(<%- sdSpacingVertical %>) 0;
        overflow: auto;
        box-sizing: border-box;
    }

    .static-docs table caption {
        display: inline-block;
        margin-block-end: 15px;
        background: var(<%- sdTableCaptionBackgroundColor %>);
        border-radius: 4px;
        padding: 5px 10px;
    }

    .static-docs table thead tr {
        border-bottom: 2px solid var(<%- sdTableBorderColor %>);
    }

    .static-docs table tr {
        background-color: var(<%- sdTableBackground %>);
        border-top: var(<%- sdTableBorderWidth %>) solid var(<%- sdTableBorderColor %>);
    }

    .static-docs table th {
        background-color: var(<%- sdTableHeadBackground %>);
        color: var(<%- sdTableHeadColor %>);
        font-weight: var(<%- sdTableHeadFontWeight %>);
    }

    .static-docs table td,
    .static-docs table th {
        border: var(<%- sdTableBorderWidth %>) solid var(<%- sdTableBorderColor %>);
        padding: var(<%- sdTableCellPadding %>);
    }

    .static-docs pre code {
        display: block;
        padding: 16px;
        background-color: var(<%- sdCodeBlockBackground %>);
    }

    .static-docs code {
        background-color: var(<%- sdCodeBackground %>);
        border: .1rem solid rgba(0,0,0,.1);
        border-radius: var(<%- sdCodeBorderRadius %>);
        font-family: var(<%- sdFontFamilyMonospace %>);
        padding: 2px;
    }

    @media (max-width: 996px) {
        .sd-mobile-control {
            display: flex;
            padding: 15px;
            justify-content: space-between;
        }

        .static-docs .sd-mobile-toggle {
            display: block;
        }

        .sd-sidebar {
            margin-inline-start: calc((-1 * var(<%- sdSidebarWidth %>)) - 6px);
        }

        .sd-active-mobile-sidebar .sd-sidebar {
            margin-inline-start: -5px;
            padding-inline-start: 5px;
            position: absolute;
            top: 0;
            background: var(<%- sdSidebarBackgroundColor %>);
            height: 100vh;
            z-index: 1;
        }

        .sd-active-mobile-sidebar .sd-mobile-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: black;
            opacity: 0.sd-8;
            z-index: 1;
        }

        .static-docs footer .sd-links {
            flex-direction: column;
        }
    }
</style>
`;
export default template;
const templateVariables = {
    sdSidebarLinkActiveBackgroundColor: "--sd-sidebar-link-active-background-color",
    sdTableCaptionBackgroundColor: "--sd-table-caption-background-color",
    sdCategoryBackgroundColor: "--sd-category-background-color",
    sdBackgroundColorLayer1: "--sd-background-color-layer-1",
    sdBackgroundColorLayer2: "--sd-background-color-layer-2",
    sdBackgroundColorLayer3: "--sd-background-color-layer-3",
    sdSidebarBackgroundColor: "--sd-sidebar-background-color",
    sdToolbarBackgroundColor: "--sd-toolbar-background-color",
    sdFooterBackgroundColor: "--sd-footer-background-color",
    sdTableHeadFontWeight: "--sd-table-head-font-weight",
    sdCategoryBorderRadius: "--sd-category-border-radius",
    sdFontFamilyMonospace: "--sd-font-family-monospace",
    sdTableHeadBackground: "--sd-table-head-background",
    sdCategoryBorderColor: "--sd-category-border-color",
    sdCodeBlockBackground: "--sd-code-block-background",
    sdSidebarBorderColor: "--sd-sidebar-border-color",
    sdTableBorderWidth: "--sd-table-border-width",
    sdTableBorderColor: "--sd-table-border-color",
    sdTableCellPadding: "--sd-table-cell-padding",
    sdCodeBorderRadius: "--sd-code-border-radius",
    sdAccentLinkColor: "--sd-accent-link-color",
    sdSpacingVertical: "--sd-spacing-vertical",
    sdTableBackground: "--sd-table-background",
    sdTableHeadColor: "--sd-table-head-color",
    sdCodeBackground: "--sd-code-background",
    sdToolbarShadow: "--sd-toolbar-shadow",
    sdToolbarHeight: "--sd-toolbar-height",
    sdFooterHeight: "--sd-footer-height",
    sdSidebarWidth: "--sd-sidebar-width",
    sdFooterColor: "--sd-footer-color",
    sdFontFamily: "--sd-font-family",
    sdLinkColor: "--sd-link-color",
    sdFontColor: "--sd-font-color",
};
 export { templateVariables };
/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<style>
    body,
    html {
        margin: 0;
        padding: 0;
    }

    body {
        --sd-link-color: #ebedf0;
        --sd-accent-link-color: #fb356d;
        --sd-font-color: #f5f6f7;
        --sd-font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
            Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --sd-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --sd-background-color-layer-1: #18191a;
        --sd-background-color-layer-2: #242526;
        --sd-background-color-layer-3: hsla(0, 0%, 100%, 0.05);
        --sd-footer-background-color: #303846;
        --sd-footer-color: #ebefd0;
        --sd-footer-height: 220px;
        --sd-spacing-vertical: 20px;
        --sd-table-background: transparent;
        --sd-table-border-width: 1px;
        --sd-table-border-color: #606770;
        --sd-table-head-background: inherit;
        --sd-table-head-color: inherit;
        --sd-table-head-font-weight: 700;
        --sd-table-cell-padding: 10px;
        --sd-sidebar-border-color: #606770;
        --sd-sidebar-width: 300px;
        --sd-sidebar-link-active-background-color: var(--sd-background-color-layer-3);
        --sd-sidebar-background-color: var(--sd-background-color-layer-2);
        --sd-toolbar-background-color: var(--sd-background-color-layer-2);
        --sd-toolbar-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        --sd-toolbar-height: 60px;
        --sd-category-border-color: #444950;
        --sd-category-background-color: var(--sd-background-color-layer-2);
        --sd-category-border-radius: 10px;
        --sd-table-caption-background-color: var(--sd-background-color-layer-3);
        --sd-code-background: #333437;
        --sd-code-border-radius: 6px;
        --sd-code-block-background: rgb(41, 45, 62);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background: var(--sd-background-color-layer-1);
        color: var(--sd-font-color);
        font-family: var(--sd-font-family);
    }

    p {
        line-height: 24px;
    }

    .toolbar {
        position: sticky;
        top: 0;
    }

    .toolbar .section {
        display: flex;
        padding: 0 15px;
    }

    header nav {
        display: flex;
        height: var(--sd-toolbar-height);
        justify-content: space-between;
        background-color: var(--sd-toolbar-background-color);
        box-shadow: var(--sd-toolbar-shadow);
    }

    header nav ul {
        display: flex;
        padding: 15px 0;
    }

    header nav li {
        padding: 0 10px;
    }

    .icon {
        height: 20px;
        width: 18px;
        fill: var(--sd-link-color);
    }

    a:hover .icon {
        fill: var(--sd-accent-link-color);
    }

    .sidebar {
        width: var(--sd-sidebar-width);
        min-width: var(--sd-sidebar-width);
        border-right: 1px solid var(--sd-sidebar-border-color);
        min-height: calc(100vh - var(--sd-toolbar-height) - var(--sd-footer-height) - 30px);
        overflow: auto;
    }

    .sidebar nav {
        margin-inline-start: -20px;
    }

    .sidebar nav > ul {
        margin: 20px 0;
    }

    .sidebar a {
        display: flex;
        line-height: 1.25;
        flex: 1;
        padding: 10px 15px;
        border-radius: 5px;
        color: var(--sd-link-color);
    }

    .sidebar .active {
        background: var(--sd-sidebar-link-active-background-color);
    }

    .category {
        margin: var(--sd-spacing-vertical) 0;
        padding: 0;
        display: flex;
        row-gap: 15px;
        column-gap: 15px;
        flex-wrap: wrap;
    }

    .category li {
        border: 1px solid var(--sd-category-border-color);
        background: var(--sd-category-background-color);
        box-shadow: 0 1.5px 3px 0 rgb(0 0 0 / 15%);
        padding: 20px;
        border-radius: var(--sd-category-border-radius);
        width: 200px;
    }

    .category li a {
        color: var(--sd-link-color);
    }

    .category a,
    .toolbar a,
    .sidebar a,
    footer a {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }

    a {
        color: var(--sd-link-color);
        text-decoration: none;
    }

    a:hover {
        color: var(--sd-accent-link-color);
    }

    main {
        display: flex;
        margin: 0 25px 0 5px;
    }

    main > .container {
        padding: 25px;
    }

    main div a {
        color: var(--sd-accent-link-color);
    }

    main ul {
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }

    .container {
        max-width: 900px;
    }

    .content ul {
        list-style: inherit;
    }

    .frontpage {
        margin: var(--sd-spacing-vertical);
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        margin: 50px 0;
    }

    .card {
        background: var(--sd-background-color-layer-3);
        border-radius: 5px;
        padding: 0 20px;
        width: 300px;
    }

    .mobile-overlay {
        display: none;
    }

    .mobile-control {
        display: none;
    }

    .mobile-toggle {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;
        padding: 0;
        display: none;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        line-height: 26px;
    }

    h1 {
        margin: var(--sd-spacing-vertical) 0;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 15px;
        padding: 15px;
        min-height: var(--sd-footer-height);
        background-color: var(--sd-footer-background-color);
        color: var(--sd-footer-color);
    }

    footer .links {
        display: flex;
        justify-content: space-around;
        column-gap: 15px;
    }

    footer .links svg {
        margin-inline-start: 5px;
        position: relative;
        top: 1px;
    }

    footer .copyright {
        text-align: center;
    }

    table {
        border-collapse: collapse;
        display: block;
        margin: var(--sd-spacing-vertical) 0;
        overflow: auto;
        box-sizing: border-box;
    }

    table caption {
        display: inline-block;
        margin-block-end: 15px;
        background: var(--sd-table-caption-background-color);
        border-radius: 4px;
        padding: 5px 10px;
    }

    table thead tr {
        border-bottom: 2px solid var(--sd-table-border-color);
    }

    table tr {
        background-color: var(--sd-table-background);
        border-top: var(--sd-table-border-width) solid var(--sd-table-border-color);
    }

    table th {
        background-color: var(--sd-table-head-background);
        color: var(--sd-table-head-color);
        font-weight: var(--sd-table-head-font-weight);
    }

    table td,
    table th {
        border: var(--sd-table-border-width) solid var(--sd-table-border-color);
        padding: var(--sd-table-cell-padding);
    }

    pre code {
        display: block;
        padding: 16px;
        background-color: var(--sd-code-block-background);
    }

    code {
        background-color: var(--sd-code-background);
        border: .1rem solid rgba(0,0,0,.1);
        border-radius: var(--sd-code-border-radius);
        font-family: var(--sd-font-family-monospace);
        padding: 2px;
    }

    @media (max-width: 996px) {
        .mobile-control {
            display: flex;
            padding: 15px;
            justify-content: space-between;
        }

        .docs .mobile-toggle {
            display: block;
        }

        .sidebar {
            margin-inline-start: calc((-1 * var(--sd-sidebar-width)) - 6px);
        }

        .active-mobile-sidebar .sidebar {
            margin-inline-start: -5px;
            padding-inline-start: 5px;
            position: absolute;
            top: 0;
            background: var(--sd-sidebar-background-color);
            height: 100vh;
            z-index: 1;
        }

        .active-mobile-sidebar .mobile-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: black;
            opacity: 0.8;
            z-index: 1;
        }

        footer .links {
            flex-direction: column;
        }
    }
</style>
`;
export default template;

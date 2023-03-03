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
        --link-color: #ebedf0;
        --accent-link-color: #fb356d;
        --font-color: #f5f6f7;
        --font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
            Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --background-color-layer-1: #18191a;
        --background-color-layer-2: #242526;
        --background-color-layer-3: hsla(0, 0%, 100%, 0.05);
        --footer-background-color: #303846;
        --footer-color: #ebefd0;
        --footer-height: 220px;
        --spacing-vertical: 20px;
        --table-background: transparent;
        --table-border-width: 1px;
        --table-border-color: #606770;
        --table-head-background: inherit;
        --table-head-color: inherit;
        --table-head-font-weight: 700;
        --table-cell-padding: 10px;
        --sidebar-border-color: #606770;
        --sidebar-width: 300px;
        --sidebar-link-active-background-color: var(--background-color-layer-3);
        --sidebar-background-color: var(--background-color-layer-2);
        --toolbar-background-color: var(--background-color-layer-2);
        --toolbar-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        --toolbar-height: 60px;
        --category-border-color: #444950;
        --category-background-color: var(--background-color-layer-2);
        --category-border-radius: 10px;
        --table-caption-background-color: var(--background-color-layer-3);
        --code-background: #333437;
        --code-border-radius: 6px;
        --code-block-background: rgb(41, 45, 62);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background: var(--background-color-layer-1);
        color: var(--font-color);
        font-family: var(--font-family);
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
        height: var(--toolbar-height);
        justify-content: space-between;
        background-color: var(--toolbar-background-color);
        box-shadow: var(--toolbar-shadow);
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
        fill: var(--link-color);
    }

    a:hover .icon {
        fill: var(--accent-link-color);
    }

    .sidebar {
        width: var(--sidebar-width);
        min-width: var(--sidebar-width);
        border-right: 1px solid var(--sidebar-border-color);
        min-height: calc(100vh - var(--toolbar-height) - var(--footer-height) - 30px);
        overflow: auto;
        padding: 0;
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
        color: var(--link-color);
    }

    .sidebar .active {
        background: var(--sidebar-link-active-background-color);
    }

    .category {
        margin: var(--spacing-vertical) 0;
        padding: 0;
        display: flex;
        row-gap: 15px;
        column-gap: 15px;
        flex-wrap: wrap;
    }

    .category li {
        border: 1px solid var(--category-border-color);
        background: var(--category-background-color);
        box-shadow: 0 1.5px 3px 0 rgb(0 0 0 / 15%);
        padding: 20px;
        border-radius: var(--category-border-radius);
        width: 200px;
    }

    .category li a {
        color: var(--link-color);
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
        color: var(--link-color);
        text-decoration: none;
    }

    a:hover {
        color: var(--accent-link-color);
    }

    main {
        display: flex;
        margin: 0 25px 0 5px;
    }

    main > .container {
        padding: 25px;
    }

    main div a {
        color: var(--accent-link-color);
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
        margin: var(--spacing-vertical);
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
        background: var(--background-color-layer-3);
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
        margin: var(--spacing-vertical) 0;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 15px;
        padding: 15px;
        min-height: var(--footer-height);
        background-color: var(--footer-background-color);
        color: var(--footer-color);
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
        margin: var(--spacing-vertical) 0;
        overflow: auto;
        box-sizing: border-box;
    }

    table caption {
        display: inline-block;
        margin-block-end: 15px;
        background: var(--table-caption-background-color);
        border-radius: 4px;
        padding: 5px 10px;
    }

    table thead tr {
        border-bottom: 2px solid var(--table-border-color);
    }

    table tr {
        background-color: var(--table-background);
        border-top: var(--table-border-width) solid var(--table-border-color);
    }

    table th {
        background-color: var(--table-head-background);
        color: var(--table-head-color);
        font-weight: var(--table-head-font-weight);
    }

    table td,
    table th {
        border: var(--table-border-width) solid var(--table-border-color);
        padding: var(--table-cell-padding);
    }

    pre code {
        display: block;
        padding: 16px;
        background-color: var(--code-block-background);
    }

    code {
        background-color: var(--code-background);
        border: .1rem solid rgba(0,0,0,.1);
        border-radius: var(--code-border-radius);
        font-family: var(--font-family-monospace);
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
            margin-inline-start: calc((-1 * var(--sidebar-width)) - 6px);
        }

        .active-mobile-sidebar .sidebar {
            margin-inline-start: -5px;
            padding-inline-start: 5px;
            position: absolute;
            top: 0;
            background: var(--sidebar-background-color);
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

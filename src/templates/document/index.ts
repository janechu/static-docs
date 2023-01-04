/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<!DOCTYPE html>

<html lang="en">
    <head>
        <%= metaTemplate %> <%=
        styleTemplate %>
    </head>

    <body class="docs">
        <div class="mobile-overlay"></div>
        <div>
            <%= toolbarTemplate %>

            <main>
                <%= sidebar %>

                <div class="container">
                    <%= versionInfo ?
                    versionInfo : "" %>
                    <div class="content"><%= content %></div>
                    <div class="index"><%= index %></div>
                </div>
            </main>
        </div>

        <%= footerTemplate %>
    </body>
</html>
`;
export default template;

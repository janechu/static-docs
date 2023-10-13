/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<!DOCTYPE html>

<html lang="en">
    <head>
        <%= metaTemplate %> <%=
        styleTemplate %>
        <% _.forEach(scripts, function(script) { %>
            <script src="<%- script %>"></script>
        <% }); %>
    </head>
    <body class="static-docs">
        <div class="sd-mobile-overlay"></div>
        <div>
            <%= toolbarTemplate %>
            <main>
                <%= sidebar %>
                <div class="sd-container">
                    <%= versionInfo ?
                    versionInfo : "" %>
                    <div class="sd-content"><%= content %></div>
                    <div class="sd-index"><%= index %></div>
                </div>
            </main>
        </div>
        <%= footerTemplate %>
    </body>
</html>
`;
export default template;

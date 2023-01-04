/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<table>
    <caption>
        package:
        <code><%- versionInfo.package %></code>
    </caption>
    <thead>
        <tr>
            <th colspan="1">
                version
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><em><%- versionInfo.docVersion %> - current</em></td>
        </tr>
        <% _.forEach(versionInfo.otherAvailableVersions, function(version) { %>
        <tr>
            <td>
                <a href="<%- baseUrl %>/docs/<%- version.path %>"><%- version.label %></a>
            </td>
        </tr>
        <% }); %>
    </tbody>
</table>`;
export default template;

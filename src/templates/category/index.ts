/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<h1><%- label %></h1>
<p><%- description %></p>
<ul class="sd-category">
    <% _.forEach(items, function(item) { %>
    <li><a href="<%- baseUrl %>/docs/<%- item.path %>"><%- item.label %></a></li>
    <% }); %>
</ul>`;
export default template;

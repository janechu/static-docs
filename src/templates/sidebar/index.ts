/**
 * Auto-generated file from build/generate-export-files.js
 */
const template = `<div class="sd-sidebar">
    <div class="sd-mobile-control">
        <span><%- projectTitle %></span>
        <button id="mobileClose" class="sd-mobile-toggle">
            <svg viewBox="0 0 15 15" width="21" height="21">
                <g stroke="#ccd0d5" stroke-width="1.2">
                    <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
                </g>
            </svg>
        </button>
    </div>
    <nav>
        <ul>
            <% _.forEach(sidebar.links, function(documentationItem) { %>
            <li>
                <a
                    class="<%- documentationItem.path === currentPath ? 'sd-active' : '' %>"
                    href="<%- baseUrl %>/docs/<%- documentationItem.path %>"
                >
                    <%- documentationItem.label %>
                </a>
                <% if (Array.isArray(documentationItem.items)) { %>
                <ul>
                    <% _.forEach(documentationItem.items, function(categoryItem) { %>
                    <li>
                        <a
                            class="<%- categoryItem.path === currentPath ? 'sd-active' : '' %>"
                            href="<%- baseUrl %>/docs/<%- categoryItem.path %>"
                        >
                            <%- categoryItem.label %>
                        </a>
                    </li>
                    <% }); %>
                </ul>
                <% } %>
            </li>
            <% }); %>
        </ul>
    </nav>
    <script>
        var mobileCloseButton = document.getElementById("mobileClose");
        mobileCloseButton.addEventListener("mousedown", e => {
            e.preventDefault();

            document.body.classList.remove("sd-active-mobile-sidebar");
        });
    </script>
</div>`;
export default template;

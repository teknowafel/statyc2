import views from "../module/views.js";
import settings from "../data/settings.js";

export default {
    renderMenu: function() {
        menu = document.createElement('div');
        menu.classList = ["menu"];

        for (var v in views.views) {
            view = views.views[v];
            var link = document.createElement('a');
            link.classList = ["menuBtn"];
            link.innerHTML = view.name;
            link.href = "#";
            link.onclick = views.renderView(view);

            menu.appendChild(link);
        }
        return menu.outerHTML;
    }
};
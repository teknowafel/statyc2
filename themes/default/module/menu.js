import views from "../module/views.js";
import settings from "../data/settings.js";

export default {
    renderMenu: function() {
        menu = document.createElement('div');
        menu.classList = ["menu"];
        for (var v in views.views) {
            var view = views.views[v];
            if (view.showOnMenu){
                var link = document.createElement('a');
                link.classList = ["menuBtn"];
                link.innerHTML = view.menuName;
                link.id = `menuBtn${view.name}`;
                link.setAttribute('onclick', `views.menuBtn('${link.id}');`);
                link.href = "#top";
                menu.appendChild(link);
            }
        }
        return menu.outerHTML;
    }
};
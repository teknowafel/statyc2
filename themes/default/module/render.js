import templates from "../module/templates.js";
import settings from "../data/settings.js";

import views from "../module/views.js";
window.views = views;

window.onload = (event) => {
    render();
    views.setPageView(views.views.fullPost);
};

function render() {
    document.title = `${pageName} | ${settings.siteName}`;
    var tmps = document.querySelectorAll('tmp');
    tmps.forEach(function(tmp, i) {
        if (typeof templates[tmp] == "function") {
            var replacement = document.createElement('div');
            replacement = templates[tmp]();
            tmp.innerHTML = "";
            tmp.appendChild(replacement);
        }
        else {
            var replacement = templates[tmp.id];
            tmp.innerHTML = replacement;
        }
    });
}

export default render();
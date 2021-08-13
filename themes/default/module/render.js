import templates from "../module/templates.js";
import settings from "../data/settings.js";

import views from "../module/views.js";

window.onload = (event) => {
    render();
};

function render() {
    document.title = `${pageName} | ${settings.siteName}`;
    var tmps = document.querySelectorAll('tmp');
    tmps.forEach(function(tmp, i) {
        if (typeof templates[tmp.id] == "function") {
            var replacement = document.createElement('div')
            replacement.innerHTML = templates[tmp.id];
        } else {
            var replacement = templates[tmp.id];
        }
        templates[tmp].innerHTML = "";
        templates[tmp].appendChild(replacement);
    });
    1
}

export default render();
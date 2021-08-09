import templates from "../module/templates.js";
import settings from "../data/settings.js";

window.onload = (event) => {
    render();
};

function render() {
    document.title = `${pageName} | ${settings.siteName}`;
    var tmp = document.querySelectorAll('tmp');
    var replacement = "";
    tmp.forEach(function(tmp, i) {
        if (typeof templates[tmp.id] == "function") {
            replacement = templates[tmp.id]();
        } else {
            replacement = templates[tmp.id];
        }
        tmp.outerHTML = replacement;
    });
    1
}
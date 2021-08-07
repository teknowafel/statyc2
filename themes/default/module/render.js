import templates from "../module/templates.js";
import settings from "../data/settings.js";

window.onload = (event) => {
    render();
};

function render() {
    document.title = `${pageName} | ${settings.siteName}`;
    var tmp = document.querySelectorAll('tmp');
    tmp.forEach(function (tmp, i) {
        tmp.outerHTML = templates[tmp.id];
    });
}

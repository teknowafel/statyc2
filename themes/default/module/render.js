import templates from "./templates.js";
import settings from "./settings.js";

window.onload = (event) => {
    render();
};

function render() {
    console.log(settings);
    document.title = settings.siteName;
    var tmp = document.querySelectorAll('tmp');
    tmp.forEach(function (tmp, i) {
        tmp.outerHTML = templates[tmp.id];
    });
}

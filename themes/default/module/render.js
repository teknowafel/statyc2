function render() {
    var tmp = document.querySelectorAll('tmp');
    tmp.forEach(function (tmp, i) {
        tmp.outerHTML = templates[tmp.id]
    });
}

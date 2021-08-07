function getSettings() {
    fetch('data/settings.json')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        var doc = JSON.parse(data);

        return(doc.settings);
    });
}

var settings = new getSettings();

export default settings;
function getSettings() { 
    var doc = "";
    fetch('data/settings.json')
        .then(response => response.text())
        .then(data => {
            doc = JSON.parse(data); 
        });
    return doc.settings;
}

var settings = new getSettings();
export default settings;
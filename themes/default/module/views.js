export default {
    renderViews: function() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var view = urlParams.get('view');
        if (view != null) {
            return this.views[view];
        } 
        else {
            return this.views['default'];
        }
    },
    views: {
        default: `<tmp id="landing"></tmp>`,
        blog: `<tmp id="posts"></tmp>`,
        fullPost: `<tmp id="fullPost"></tmp>`,
    },
}
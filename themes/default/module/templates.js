// CODE FOR BLOG.HTML
import postHandler from "../module/postHandler.js";
import views from "../module/views.js";
import settings from "../data/settings.js";
import menu from "../module/menu.js";
var handler = postHandler;
// TEMPLATES
var templates = {
    posts: handler.renderPostsList(),
    footer: settings.copyrightInfo,
    menu: menu.renderMenu(),
    toTop: `<div class="toTop">
        <a class="menuBtn red" href="index.html#top">▲</a>
    </div>`,
    fullPost: function() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var postName = urlParams.get('name');
        var post = postHandler.getPostByName(postName);
        return postHandler.renderFullPost(post);
    },
    currentView: views.renderView(views.views.home),
};

export default templates;
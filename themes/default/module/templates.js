// CODE FOR BLOG.HTML
import postHandler from "../module/postHandler.js";
import views from "../module/views.js";
import settings from "../data/settings.js";
var handler = postHandler;
// TEMPLATES
var templates = {
    posts: handler.renderPostsList(),
    footer: settings.copyrightInfo,
    menus: `<top id="top" />
    <div class="menu">
        <a href="index.html" class="menuBtn title" id="titlebtn">${settings.siteName}</a>
        <a class="menuBtn" href="blog.html">Blog</a>
        <a class="menuBtn" href="about.html">About</a>
    </div>

    <div class="toTop">
        <a class="menuBtn red" href="#top">▲</a>
    </div>`,
    fullPost: function() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var postName = urlParams.get('name');
        var post = postHandler.getPostByName(postName);
        return postHandler.renderFullPost(post);
    },
    landing: function(){
        var post = {
            name: "Welcome!",
            author: "teknowafel",
            date: 1628550611000,
            featuredImage: "none",
            content: `Statyc-py rewritten. Again. Statyc2 was the first rewrite of statyc-py, 
            and the functionality is still pretty good. However, my haste to produce something 
            working left the code an unreadable mess. That's what this is for! Statyc3 or 2.5
            if you will, this is the the next *(and hopefully for me, last)* revision of statyc.
            Here are some changes since the last rewrite:
            \n* Views
                - Now, instead of clunky separate html pages, we simply have views that can be rendered using the ?view= parameter in the URL.`
        }
        return postHandler.renderFullPost(post);
    },
    view: views.renderViews(),
};

export default templates;
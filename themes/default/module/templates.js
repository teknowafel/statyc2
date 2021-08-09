// CODE FOR BLOG.HTML
import postHandler from "../module/post.js";
import settings from "../data/settings.js";

var handler = postHandler;
// TEMPLATES
var templates = {
    posts: `${handler.renderPostsList()}`,
    footer: settings.copyrightInfo,
    menus: `<top id="top" />
    <div class="menu">
        <a href="index.html" class="menuBtn title" id="titlebtn">${settings.siteName}</a>
        <a class="menuBtn" href="blog.html">Blog</a>
        <a class="menuBtn" href="about.html">About</a>
    </div>

    <div class="toTop">
        <a class="menuBtn red" href="#top">▲</a>
    </div>`
};

export default templates;

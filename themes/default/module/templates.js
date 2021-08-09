// CODE FOR BLOG.HTML
import post from "../module/post.js";
import settings from "../data/settings.js";

// TEMPLATES
var templates = {
    posts: `${post.render.postsList()}`,
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

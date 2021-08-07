// CODE FOR BLOG.HTML
import posts from "../data/posts.js";
import settings from "../data/settings.js";

var converter = new showdown.Converter();
var blog = "";
function getPosts() {
    var postsElement = document.createElement('div');
    postsElement.id = "posts";

    posts.posts.forEach(function (post) {
        var mdpreview = post.content.split('\n')
        mdpreview = mdpreview.slice(0, 3).join(" ") + "..."

        var markdownHtml = converter.makeHtml(post.content)
        var previewHtml = converter.makeHtml(mdpreview)
        var element = document.createElement("div")
        var postLink = `posts.html?name=${post.name}`
        var d = new Date(post.date)
        var date = `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`

        if (post.featuredImage != "none") {
            var featuredImage = `<div id="${post.name}Img" class="jumbo" style="background-image: url('${post.featuredImage}');"></div>`
        }
        else {
            var featuredImage = ""
        }

        element.innerHTML = `
        <div class="jumboWrapper" id="${post.name}">
        ${featuredImage}
            <div class="contentWrapper">
                <div class="titleBlock">
                    <h2>${post.name}</h2>
                    <h5>${post.author} ${date}</h5>
                </div>
                <div class="inner">
                    <p>
                        ${previewHtml}<a href="${postLink}" class="readMoreBtn">Read more...</a>
                    </p>
                </div>
            </div>
        </div>
        `

        postsElement.appendChild(element)
    });

    return postsElement.outerHTML;
}

// TEMPLATES
var templates = {
    posts: `${getPosts()}`,
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

import posts from "../data/posts.js";

var postHandler = {
    //GET

    getAllPosts: function() {
        return posts;
    },
    getPostByName: function(name) {
        return posts.find(post => post.name = name);
    },
    getPostLink: function(post) {
        return `posts.html?name=${post.name}`;
    },
    getPostDateString: function(post) {
        var d = new Date(post.date);
        return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
    },

    //RENDER

    renderMarkdownPreview: function(markdown) {
        var mdpreview = markdown.split(' ');
        return mdpreview.slice(0, 20).join(" ") + "...";
    },
    renderMarkdownToHTML: function(markdown) {
        var html = "";
        var converter = new showdown.Converter();
        return converter.makeHtml(markdown);
    },
    renderPostPreview: function(post) {
        var element = document.createElement("div");
        if (post.featuredImage != "none") {
            var featuredImage = `<div id="${post.name}Img" class="jumbo" style="background-image: url('${post.featuredImage}');"></div>`;
        }
        else {
            var featuredImage = "";
        }

        var previewHtml = this.renderMarkdownToHTML(this.render.markdownPreview(post));
        var postLink = this.getPostLink(post);

        element.outerHTML = `
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
            `;
    },
    renderPostsList: function() {
        var output = "";
        var postsListElement = document.createElement('div');
        this.getAllPosts().forEach(function (post) {
            element = this.renderPostPreview(post)
            postsListElement.appendChild(element)
        });
        
        return postsListElement;
    },
};

export default postHandler;
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
        return `index.html?view=fullPost&name=${post.name}`;
    },
    getPostDateString: function(post) {
        var d = new Date(post.date);
        return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
    },


    //RENDER

    renderMarkdownPreview: function(markdown) {
        var mdpreview = String(markdown).split(' ');
        return mdpreview.slice(0, 35).join(" ") + "...";
    },
    renderFeaturedImageDiv: function(post) {
        if (post.featuredImage != "none") {
            return `<div id="${post.name}Img" class="jumbo" style="background-image: url('${post.featuredImage}');"></div>`;
        } else {
            return "";
        }
    },
    renderMarkdownToHTML: function(markdown) {
        var converter = new showdown.Converter();
        return converter.makeHtml(markdown);
    },
    renderPostPreview: function(post) {
        var element = document.createElement("div");
        element.classList = ["jumboWrapper"];
        element.id = post.name;

        var previewHtml = postHandler.renderMarkdownToHTML(postHandler.renderMarkdownPreview(post.content));
        var postLink = postHandler.getPostLink(post);
        var date = postHandler.getPostDateString(post);
        var featuredImage = postHandler.renderFeaturedImageDiv(post);

        element.innerHTML = `
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
            `;

        return element;
    },
    renderFullPost: function(post) {
        var postWrapper = document.createElement("div");
        postWrapper.id = "postwrapper";
        var featuredImage = postHandler.renderFeaturedImageDiv(post);
        var postHTML = postHandler.renderMarkdownToHTML(post.content);
        var date = postHandler.getPostDateString(post);

        if (featuredImage == "") {
            var margin = "";
        } else {
            var margin = "margin-top: -5pt;"
        }

        postWrapper.innerHTML = `
        <div class="landing">
            ${featuredImage}
            <div class="innerLanding" style="${margin}">
                <h1>${post.name}</h1>
                ${postHTML}
            </div>
            <p class="published">${post.author} ${date}</p>
        </div>
        `;

        return postWrapper;
    },
    renderPostsList: function() {
        var postsListElement = document.createElement('div');
        postHandler.getAllPosts().forEach(function(post) {
            var element = postHandler.renderPostPreview(post)
            postsListElement.appendChild(element)
        });

        return postsListElement;
    },
};

export default postHandler;
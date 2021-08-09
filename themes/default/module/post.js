import posts from "../data/posts.js";

export default {
    get: {
        allPosts: function() {
            return posts;
        },
        postByName: function(name) {
            return posts.find(post => post.name = name);
        }
    },
    render: {
        markdownPreview: function(markdown) {
            var mdpreview = markdown.split(' ');
            return mdpreview.slice(0, 20).join(" ") + "...";
        },
        markdownToHTML: function(markdown) {
            var html = "";
            var converter = new showdown.Converter();
            return converter.makeHtml(markdown);
        },
        postPreview: function(post) {
            if (post.featuredImage != "none") {
                var featuredImage = `<div id="${post.name}Img" class="jumbo" style="background-image: url('${post.featuredImage}');"></div>`;
            }
            else {
                var featuredImage = "";
            }
        },
        dateString: function(post) {
            var d = new Date(post.date);
            return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
        },
        postsList: function() {
            
            var output = "";
            
            var postsListElement = document.createElement('div');
            this.get.allPosts().forEach(function (post) {

                var markdownHtml = converter.makeHtml(post.content)
                var previewHtml = converter.makeHtml(mdpreview)
                var element = document.createElement("div")
                var postLink = `posts.html?name=${post.name}`

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
                return postsElement.outerHTML;
            });
        },
    },
};
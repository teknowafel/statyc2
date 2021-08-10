import postHandler from "../module/postHandler.js";
import settings from "../data/settings.js";

export default {
    renderView: function(view) {
        if (typeof this.views[view] == "function") {
            return this.views[view].html();
        } 
        else {
            return this.views[view].html;
        }
    },
    getViewByName: function(name) {
        return this.views.find(view => view.name = name);
    },
    views: {  
        home: {
            name: settings.siteName,
            html: function(){
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
                        - Now, instead of clunky separate html pages, we simply have views that can be rendered using the ?view= parameter in the URL.
                    \n* Modules
                        - Instead of sifting through sphaghetti code, you can just take a look at the /modules!`
                }
                return postHandler.renderFullPost(post);
            },
        },
        blog: {
            name: "Blog",
            html: `<tmp id="posts"></tmp>`,
        },
        fullPost: {
            name: "Post Name",
            html: postHandler.renderFullPost(postHandler.getPostByName("Hello Again")),
        },
    },
};
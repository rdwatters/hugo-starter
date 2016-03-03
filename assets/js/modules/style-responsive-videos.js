//Wrapvids.js
//2016, Ryan Watters, https://www.github.com/rdwatters
//MIT, Copyleft, Seriously-do-whatever-you-want-with-this license
//Included as part of Hugo and Jekyll starter kits
// Hugo: https://github.com/rdwatters/hugo-starter
// Jekyll: https://github.com/rdwatters/jekyll-gulp-starter
// In aforementioned starter kits starter kits, see also: js/modules/util-wrap-and-wrap-all.js for additional use of HTMLElement.prototype.wrap/wrapAll

(function wrapVids() {
    var iframes = document.getElementsByTagName('iframe'),
        videoWrapper = document.createElement('div'),
        youTubeTest = new RegExp('youtube');
    videoWrapper.className = "videoWrapper";
    //Wrap function as substitute for jQuery .wrap(). Taken from http://stackoverflow.com/questions/3337587/wrapping-a-set-of-dom-elements-using-javascript 
    HTMLElement.prototype.wrap = function(elms) {
        // Convert `elms` to an array, if necessary.
        if (!elms.length) elms = [elms];

        // Loops backwards to prevent having to clone the wrapper on the
        // first element (see `child` below).
        for (var i = elms.length - 1; i >= 0; i--) {
            var child = (i > 0) ? this.cloneNode(true) : this;
            var el = elms[i];

            // Cache the current parent and sibling.
            var parent = el.parentNode;
            var sibling = el.nextSibling;

            // Wrap the element (is automatically removed from its current
            // parent).
            child.appendChild(el);

            // If the element had a sibling, insert the wrapper before
            // the sibling to maintain the HTML structure; otherwise, just
            // append it to the parent.
            if (sibling) {
                parent.insertBefore(child, sibling);
            } else {
                parent.appendChild(child);
            }
        }
    };
    for (var i = 0; i < iframes.length; i++) {
        if (youTubeTest.test(iframes[i].getAttribute('src'))) {
            videoWrapper.wrap(iframes[i]);
        }
    }
})();

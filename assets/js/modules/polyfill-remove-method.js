/*Taken from https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
Allows for ChildNode.remove() in browsers that do not support it.
*/
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}


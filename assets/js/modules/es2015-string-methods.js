/*
STRING MANIPULATION ES6/ES2015 Polyfill
This polyfill allows use of the str.includes(),str.startsWith(), and str.endsWith() methods in browsers that do not allow for this kind of string manipulation. This polyfill was added separate to hugo-starter because these additional string methods are *not* part of the ES2015 preset with Babel.js.
 */

//String.prototype.includes() polyfill:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
if (!String.prototype.includes) {
  String.prototype.includes = function() {
    'use strict';
    if (typeof arguments[1] === "number") {
      if (this.length < arguments[0].length + arguments[1].length) {
        return false;
      } else {
        if (this.substr(arguments[1], arguments[0].length) === arguments[0]) return true;
        else return false;
      }
    } else {
      return String.prototype.indexOf.apply(this, arguments) !== -1;
    }
  };
}
//String.prototype.startsWith()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

//String.prototype.endsWith()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

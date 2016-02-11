/**
 * Blockquote styling function (IIFE). This looks for a hyphen in all "blockquote > p", assumes the hyphen indicates attribution (requires one space on both sides of the hyphen; eg - "Here is a quote by a famous person. - Famous Person"), and then wraps the remaining text in cite.quote-attribution for additional styling. The text in the new span is preceded by a horizontal bar (aka "quotation dash" [&#x2015; in HTML]). This is a tiny client-side extension of markdown's blockquote syntax. The resulting HTML will then include a blockquote > p > cite.blockquote-citation for separate styling (and improved semantics).
 */
(function() {
  //assign all blockquote content to an html collection/variable 
  var blockQuotes = document.querySelectorAll('blockquote > p');
  //create new regex test for ' - ' (with one whitespace on each side so as not to accidentally grab hyphenated words as well) 
  var hyphenTest = new RegExp(/\s\-\s/);
  //iterate through all html blocks within the blockquotes html collection
  for (var i = 0; i < blockQuotes.length; i++) {
    //check for ' - ' in the blockquote's text content
    if (hyphenTest.test(blockQuotes[i].textContent)) {
      //if true, split existing inner HTML into two-part array
      //newQuoteContent === text leading up to hyphen
      var newQuoteContent = blockQuotes[i].innerHTML.split(' - ')[0];
      //newAuthorAttr === text after hyphen
      var newAuthorAttr = blockQuotes[i].innerHTML.split(' - ')[1];
      //fill blockquote paragraph with new content, but now with a <cite> wrapper around the author callout. 
      blockQuotes[i].innerHTML = newQuoteContent + '<cite class="blockquote-citation"> &#x2015; ' + newAuthorAttr + '</cite>';
    }
  }
})();

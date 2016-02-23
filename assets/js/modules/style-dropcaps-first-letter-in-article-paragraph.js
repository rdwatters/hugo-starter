/*
HUGO STARTER - DROPCAP SCRIPT
The following allows for dropcap styling of the first letter of the first paragraph in <article>'s with the "content" class. This module allows for extra styling but can be commented our or removed altogether if not needed.*/
//grab first paragraph in article.content
var firstPara = document.querySelector('article.content > p');
if (firstPara > 0) {
    //assign text of first paragraph to firstParaText
    var firstParaText = firstPara.textContent;
    //grab first letter of firstParaText and wrap in span.dropcap
    var firstLetter = "<span class=\"dropcap\">" + firstParaText.substring(0, 1) + "</span>";
    //assign all other text in paragraph to remainigText
    var remainingText = firstParaText.substring(1, firstParaText.length);
    //switching out text of first paragraph to include dropcap span plus the remaining text of the paragraph
    firstPara.innerHTML = firstLetter + remainingText;
}

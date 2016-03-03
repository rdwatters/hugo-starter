var searchData;
var searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', lunrSearch, true);
window.index = lunr(function() {
    this.field('id');
    this.field('url');
    this.field('title', { boost: 50 });
    this.field('description');
    this.field('tags');
    this.field('categories');
    this.field('content', { boost: 20 });
});

var searchReq = new XMLHttpRequest();
searchReq.open('GET', '/site-index.json', true);
searchReq.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        // console.log("Got the site index!");
        searchData = JSON.parse(this.response);
        searchData.forEach(function(obj, index) {
            obj['id'] = index;
            window.index.add(obj);
        });
    } else {
        // console.log("Did not get the site index.");
    }
}
searchReq.onerror = function() {
    console.log("Error when attempting to load site-index.json");
}
searchReq.send();

function lunrSearch(event) {
    var query = document.querySelector("#search-input").value;
    var searchResults = document.querySelector('#search-results');
    if (query.length === 0) {
        searchResults.innerHTML = '';
    }
    if ((event.keyCode !== 9) && (query.length > 2)) {
        var matches = window.index.search(query);
        displayResults(matches);
    }
}

function displayResults(results) {
    var searchResults = document.querySelector('#search-results');
    var inputVal = document.querySelector('#search-input').value;
    if (results.length) {
        searchResults.innerHTML = '';
        results.forEach(function(result) {
            var item = window.searchData[result.ref];
            var section = item.section.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            var appendString = '<li class=\"search-result\"><a href="' + item.url + '"><h5>' + item.title + '</h5></a><span class=\"site-section\">In: ' + section + '</span><p>' + item.description + '</p><div class=\"search-result-tags\"><div class=\"tags\"></div>';
            var tags = '';
            for (var i = 0; i < item.tags.length; i++) {
                appendString += '<a class=\"tag\" href=\"/tags/' + item.tags[i] + '\">' + item.tags[i] + '</a> ';
            }
            appendString += '</div></li>';
            // appendString += tags + '</li>';
            searchResults.innerHTML += appendString;

        })
    } else {
        searchResults.innerHTML = '<li class=\"search-result none\">No results found for <span class=\"input-value\">' + inputVal + '</span>.<br/>Please check spelling and spacing.</li>';
    }
}

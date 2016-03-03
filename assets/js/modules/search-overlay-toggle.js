var searchOverlay = document.querySelector('.search-form');
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
var closeSearch = document.getElementById('close-search');
closeSearch.onclick = function() {
    if (searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
    }
}
window.addEventListener('keyup', function(event) {
    var keyPressed = event.keyCode;
    if (keyPressed === 83 && searchOverlay.classList.contains('open')) {
        return;
    } else if (keyPressed === 83) {
        searchOverlay.classList.add('open');
        if (searchInput.value.length > 0) {
            searchInput.value = '';
        }
        searchInput.focus();
    } else if (keyPressed === 27 && searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
    }
}, true);
searchButton.addEventListener('click', function(event) {
    searchOverlay.classList.toggle('open');
    searchInput.focus();
}, true);

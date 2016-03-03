var clickOrTouchStart;
if ('ontouchstart' in document.documentElement) {
    clickOrTouchStart = "touchstart";
} else {
    clickOrTouchStart = "click";
}
var headerToggle = document.getElementById('site-header-toggle');
(function() {
    var siteSections = document.querySelectorAll('.site-section');
    var address = location.pathname.split('/')[1];
    if (address.length > 0) {
        var addressTest = new RegExp(address);
        for (var i = 0; i < siteSections.length; i++) {
            if (addressTest.test(siteSections[i].dataset.section)) {
                siteSections[i].className += " active";
            }
        }
    }
})();
headerToggle.addEventListener(clickOrTouchStart, toggleHeader, false);

function toggleHeader() {
    document.querySelector('.site-header').classList.toggle('open');
    document.querySelector('main').classList.toggle('open');
}

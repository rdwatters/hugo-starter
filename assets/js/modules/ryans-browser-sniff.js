window.onload = ryansBrowserSniff;

function ryansBrowserSniff() {
    navigator.sayswho = (function() {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();
    var yourBrowser = document.getElementById('your-browser');
    yourBrowser.innerHTML = navigator.sayswho;
    if ((navigator.sayswho.toLowerCase() === "ie 9") || (navigator.sayswho.toLowerCase() === "msie 9")) {
        document.getElementById('compat-mode').style.display = "block";
        document.getElementById('set-mode').innerHTML = "Looks like you are using IE9. In order for you to sign up for an online account, you will need to turn on <a href=\"http://www.cap.org/web/footernav/system-requirements\" target=\"_blank\">compatibility mode in your browser.</a>";
    }
}

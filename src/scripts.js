/*(function() {
    setTimeout(function() {
        
    }, 1000)
})();

// and here's the trick (works everywhere)
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// use like
r(function(){
    var footerHeight = document.getElementsByTagName('footer').offsetHeight;
        var contentWrapper = document.getElementById('content-wrapper');
        console.log(contentWrapper);
       //contentWrapper.style.marginBottom = footerHeight + 'px';
});*/
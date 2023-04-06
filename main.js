function openLoginPop(){
    document.getElementById("loginPop").style.display="block";
    document.getElementById("bgLoginPop").style.display="block";
}

function closeLoginPop(){
    document.getElementById("loginPop").style.display="none";
    document.getElementById("bgLoginPop").style.display="none";
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}
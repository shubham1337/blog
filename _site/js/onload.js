$(document).ready(function() { 
    //For Performance
    bannerOffset = $('.banner').offset();
    bannerHeight = $('.banner').height();
    bannerWidth = $('.banner').width();

    //Enables animations if screen-size is greater than 480px (basically everything otherthan mobile devices)
    if ($(window).width() > 480) {
        parallaxAnimation();
        scrollingAnimations();
    }
    clickAnimations();
});

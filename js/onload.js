$(document).ready(function() { 
    //For Performance
    bannerOffset = $('.banner').offset();
    bannerHeight = $('.banner').height();
    bannerWidth = $('.banner').width();
    mobileWidth = 480;
    isMobileDevice = $(window).width() <= mobileWidth;

    //Enables animations if screen-size is greater than 480px (basically everything otherthan mobile devices)
    if (!isMobileDevice) {
        parallaxAnimation();
    }
    scrollingAnimations();
    clickAnimations();
});

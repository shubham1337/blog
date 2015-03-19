$(document).ready(function() { 
    //For Performance
    bannerOffset = $('.banner').offset();
    bannerHeight = $('.banner').height();
    bannerWidth = $('.banner').width();

    parallaxAnimation();
    scrollingAnimations();
    clickAnimations();
});

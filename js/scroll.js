$(window).scroll(function() { 
    var scrollPos = $(this).scrollTop();

    var offsetTop       = bannerOffset.top;
    var bannerScroll    = scrollPos - offsetTop;

    //Only executes when scrollTop is in the banner
    if (bannerScroll >= 0 && bannerScroll <= bannerHeight) {
        var percentScroll = 120 + ((bannerScroll / bannerHeight) * (bannerHeight - 120));

        $('.banner-content-wrapper').css('top', percentScroll + 'px');
    }

});

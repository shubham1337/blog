//For Performance
var triangleTwinkleAnimationDone = false;

function randomTriangles (min, max) {
    var randomArray = [];
    while (randomArray.length < max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        var randomNumberExists = false;

        for (var i = 0; i < randomArray.length; ++i) {
            if (randomNumber == randomArray[i]) {
                randomNumberExists = true;
                break;
            } 
        }

        if (!randomNumberExists) {
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
};


$(window).scroll(function() { 
    var scrollPos = $(this).scrollTop();

    var offsetTop       = bannerOffset.top;
    var bannerScroll    = scrollPos - offsetTop;

    //Only executes when scrollTop is in the banner
    if (bannerScroll >= 0 && bannerScroll <= bannerHeight) {
        var percentScroll = 120 + ((bannerScroll / bannerHeight) * (bannerHeight - 120));

        $('.banner-content-wrapper').css('top', percentScroll + 'px');
    }

    //Twinkling Triangle animation for anti-hexagons
    if (scrollPos > Math.round(offsetTop + bannerHeight / 2) &&
        scrollPos < Math.round(offsetTop + bannerHeight * 1.5)) {

        if (!triangleTwinkleAnimationDone) {
            var hexagons = $('.hexagon');
            var randomArray = randomTriangles(1, hexagons.length);

            var i = 0;
            var animationDelay = 50;
            function animateTriangle() {
                $(hexagons[randomArray[i] - 1]).addClass('hide-triangles');
                i++;
                if (i < randomArray.length) {
                    setTimeout(animateTriangle, animationDelay);
                }
            };
            setTimeout(animateTriangle, animationDelay);

            triangleTwinkleAnimationDone = true;
        }

    }
    else {

        if (triangleTwinkleAnimationDone) {
            console.log('class removed');
            $('.hexagon').removeClass('hide-triangles');
        }
        triangleTwinkleAnimationDone = false;

    }




});

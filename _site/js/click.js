function clickAnimations () {
    $('.section-heading-wrapper').click(function() { 
        var sectionOffset = $(this).offset().top;
        sectionOffset += 15;

        var scrollPosition = $(window).scrollTop();

        $('html,body').animate({scrollTop: sectionOffset}, 1000);
        //custom animation function, too slow, no easing or smoothness
        /*function smoothScroll() {
            $(window).scrollTop(scrollPosition);

            if (sectionOffset > scrollPosition) {
                scrollPosition += 5;
                setTimeout(smoothScroll, 1);
            }
        }
        setTimeout(smoothScroll, 1);*/
    });
}

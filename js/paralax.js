$('.banner').mousemove(function(event) { 

    var offset = bannerOffset;

    var mouseX = event.pageX - offset.left,
        mouseY = event.pageY - offset.top;

    var width   = bannerWidth;
        height  = bannerHeight;

    var percentX = - Math.round((mouseX - (width  / 2)) / 10),
        percentY = - Math.round((mouseY - (height / 2)) / 10);

    $(this).css('background-position', percentX + 'px ' + percentY + 'px')
});

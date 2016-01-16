$(window).scroll(function(){
	   var wScroll = $(this).scrollTop();

    $('.logo').css({
        //changes the position of the logo based on scroll
        'transform' : 'translate(0px, '+ wScroll /4 + '%)'
    });

    $('.back').css({
        //Move the back image up based on scroll
        'transform' : 'translate(0px, '+ wScroll /2 + '%)'
    });

    $('.front').css({
        //foreground moves up hence -ve value (moves against scroll)
        'transform' : 'translate(0px, -'+ wScroll /3 + '%)'
    });

});
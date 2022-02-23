$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    };
});
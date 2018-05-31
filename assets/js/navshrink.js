$(window).scroll(function() {
    if ($(document).scrollTop() >50) {
        $('nav').addclass('shrink');
    }
    else {
        $('nav').removeclass('shrink');
    }
});
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-nav").addClass("navbar-nav-collapse");
    } else {
        $(".navbar-nav").removeClass("navbar-nav-collapse");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".menu-2").addClass("menu-2-collapse");
    } else {
        $(".menu-2").removeClass("menu-2-collapse");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-ex1-collapse").addClass("ex1-collapse");
    } else {
        $(".navbar-ex1-collapse").removeClass("ex1-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function () {

    // slide show
    var owl = $('.slides-show');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    var owl = $('.accessories');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 1000,
        dots: false,
        autoplayHoverPause: true
    });
   
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })



});
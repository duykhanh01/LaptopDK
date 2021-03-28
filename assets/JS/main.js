$(document).ready(function () {
    // button back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#to-top').fadeIn();
        }
        else {
            $('#to-top').fadeOut();
        }
    })

    $('#to-top').click(function (e) { 
        $('html, body').animate({scrollTop: 0}, 1000)
    });
});
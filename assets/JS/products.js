$(document).ready(function () {
    $('.configuration-list li').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });
    

    // thay đổi ảnh chính
    $('.img-list li > img').click(function (e) {
        var smallImgs = $(this).attr('src');
        $('.img-main a > img').css({
            opacity: 0.25
        });
        setTimeout(function () {
            $('.img-main a > img').attr('src', smallImgs);
            $('.img-main a > img').css({
                opacity: 1,
                visibility: 'visible'
            });
            $('.img-main > a').attr('href', smallImgs);
           
        }, 200)
    });

    $(".img-main a > img").imagezoomsl({
        zoomrange: [3, 3],
        magnifycursor: 'all-scroll',
        disablewheel:false
    });

    // light box images
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            //"download",
            "thumbs",
            "close"
          ],
          animationEffect: "zoom-in-out" ,
          transitionEffect: "circular"
    });

})
$(document).ready(function () {
    $('.configuration-list li').click(function (e) { 
        $(this).addClass('active').siblings().removeClass('active');
    });
});
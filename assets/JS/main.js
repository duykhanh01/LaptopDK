// $(document).ready(function () {
//     $('button-right').click(function (event) { 
//         var slide_next = $('slides-visible').next();
//         if(slide_next.length!=0){
//             $('slides-visible').addClass(move-left).one('animationend', function(event){
//                 $('.move-out-left').removeClass('move-out-left').removeClass('slides-visible');               
//             });
//             $('slide_next').addClass('slides-visible').addClass('move-into-left').one('animationend', function(event){
//                 $('.move-into-left').removeClass('move-into-left');
//             });
//         }

//     });
// });

$(document).ready(function () {

   /* button chuyển slide bên phải */
   $('#button-right').click(function (event) {
      var slidesNext = $('.slides-visible').next();
      var positionNext = slidesNext.attr('number');

      if (positionNext != undefined) {
         $('.slides-visible').addClass('move-out-left').one('animationend', function (event) {
            $('.move-out-left').removeClass('move-out-left').removeClass('slides-visible');
         });
         slidesNext.addClass('slides-visible').addClass('move-into-left').one('animationend', function (event) {
            $('.move-into-left').removeClass('move-into-left');
         });
      } else {
         $('.slides-visible').addClass('move-out-left').one('animationend', function (event) {
            $('.move-out-left').removeClass('move-out-left').removeClass('slides-visible');
         });
         $('.slides-img:first-child').addClass('slides-visible').addClass('move-into-left').one('animationend', function (event) {
            $('.move-into-left').removeClass('move-into-left');
         });
      }
   });

   /* button chuyển slide bên trái */
   $('#button-left').click(function (event) {
      var slidesPre = $('.slides-visible').prev();
      var positionNext = slidesPre.attr('number');

      if (positionNext != undefined) {
         $('.slides-visible').addClass('move-out-right').one('animationend', function (event) {
            $('.move-out-right').removeClass('move-out-right').removeClass('slides-visible');
         });
         slidesPre.addClass('slides-visible').addClass('move-into-right').one('animationend', function (event) {
            $('.move-into-right').removeClass('move-into-right');
         });
      } else {
         $('.slides-visible').addClass('move-out-right').one('animationend', function (event) {
            $('.move-out-right').removeClass('move-out-right').removeClass('slides-visible');
         });
         $('.slides-img:last-child').addClass('slides-visible').addClass('move-into-right').one('animationend', function (event) {
            $('.move-into-right').removeClass('move-into-right');
         });
      }
   });

   /* auto slider */

   setInterval(function(){ 
      $('#button-right').click();
   }, 2000);

});
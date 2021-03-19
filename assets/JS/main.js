// $(document).ready(function () {
//     $('button-right').click(function (event) { 
//         var slide_next = $('slides-visible').next();
//         if(slide_next.length!=0){
//             $('slides-visible').addClass(move-left).one('webkitAnimationEnd', function(event){
//                 $('.move-left').removeClass('move-left').removeClass('slides-visible');               
//             });
//             $('slide_next').addClass('slides-visible').addClass('move-right').one('webkitAnimationEnd', function(event){
//                 $('.move-right').removeClass('move-right');
//             });
//         }
        
//     });
// });


$(document).ready(function() {
    $('#button-right').click(function(event) {
       var slides_next = $('.slides-visible').next();
       if(slides_next.length!=0){
          $('.slides-visible').addClass('move-left').one('webkitAnimationEnd', function(event) {
             $('.move-left').removeClass('move-left').removeClass('slides-visible');
          });
          slides_next.addClass('slides-visible').addClass('move-right').one('webkitAnimationEnd', function(event) {
             $('.move-right').removeClass('move-right');
          });
       }else{
          $('.slides-visible').addClass('move-left').one('webkitAnimationEnd', function(event) {
             $('.move-left').removeClass('move-left').removeClass('slides-visible');
          });
          $('.slides-img:first-child').addClass('slides-visible').addClass('move-right').one('webkitAnimationEnd', function(event) {
             $('.move-right').removeClass('move-right');
          });
       }
    });
 });
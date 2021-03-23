
$(document).ready(function () {

   // fix bug khi ấn quá nhanh vào nút next hoặc prev
   // không cho click trong thời gian animation đang chạy
   function afterClick(buttonX) {
      $(buttonX).attr('disabled', 'disabled');
   }

   /* auto slider */
   var timer = setInterval(function(){ 
      $('#button-next').trigger('click');
   }, 3000);

   function resetTimer(){
      // khi click vao button thi se ngung auto
      clearInterval(timer);
      // sau đó bắt đầu chạy lại slide auto
      timer = setInterval(function(){ 
         $('#button-next').trigger('click');
      }, 3000);
   }

   /* 
      move-out-left: animation di chuyển ảnh sang trái r biến mất
      move-into-left:  animation di chuyển ảnh từ bên phải vào bên trái để hiển thị;
      slides-visible: slide đang được hiển thị;
   */

  /* button chuyển slide tiếp theo */
   $('#button-next').click(function (event) {
      resetTimer()
      var slideNext = $('.slides-visible').next();
      var positionNext = slideNext.attr('number');
      var location = $('.location-active').index()+1;
      afterClick('#button-next');
      
      // nếu vị trí ảnh tiếp theo == undefined thì ảnh đầu sẽ được hiển thị
      if(positionNext!=undefined){
         // ảnh hiện tại di chuyển sang trái và biến mất
         $('.slides-visible').addClass('move-out-left').one('animationend', function (event) {
            $('#button-next').removeAttr('disabled');
            $('.move-out-left').removeClass('move-out-left').removeClass('slides-visible');
            
         });
         // ảnh tiếp theo di chuyển từ bên trái vào bên phải
         slideNext.addClass('slides-visible').addClass('move-into-left').one('animationend', function (event) {
            $('.move-into-left').removeClass('move-into-left');
         });
         // xử lý nút location của slide
         $('.slides-location li').removeClass('location-active');
         $('.slides-location li:nth-child('+(location+1)+')').addClass('location-active');
      }
      else{
         $('.slides-visible').addClass('move-out-left').one('animationend', function (event) {
            $('.move-out-left').removeClass('move-out-left').removeClass('slides-visible');
            $('#button-next').removeAttr('disabled');
         });
         $('.slides-img:first-child').addClass('slides-visible').addClass('move-into-left').one('animationend', function (event) {
            $('.move-into-left').removeClass('move-into-left');
      });
      // xử lý nút location của slide
      $('.slides-location li').removeClass('location-active');
      $('.slides-location li:first-child').addClass('location-active');
      }
   });

   /* 
      move-out-right: animation di chuyển ảnh sang phải rồi biến mất
      move-into-right:  animation di chuyển ảnh từ bên trái vào bên phải để hiển thị;
      slides-visible: slide đang được hiển thị;
   */

   /* button chuyển slide ngược lại */
   $('#button-prev').click(function (event) {
      resetTimer()
      var slidePre = $('.slides-visible').prev();
      var positionNext = slidePre.attr('number');
      var location = $('.location-active').index()+1;
      afterClick('#button-prev');
      // nếu vị trí ảnh tiếp theo == undefined thì ảnh cuối sẽ được hiển thị
      if (positionNext!=undefined) {
         console.log(location);
         // ảnh hiện tại di chuyển sang phải và biến mất
         $('.slides-visible').addClass('move-out-right').one('animationend', function (event) {
            $('#button-prev').removeAttr('disabled');
            $('.move-out-right').removeClass('move-out-right').removeClass('slides-visible');
         });
         // ảnh tiếp theo di chuyển từ bên trái vào bên phải
         slidePre.addClass('slides-visible').addClass('move-into-right').one('animationend', function (event) {
            $('.move-into-right').removeClass('move-into-right');
         });

         // xử lý nút location của slide
         $('.slides-location li').removeClass('location-active');
         $('.slides-location li:nth-child('+(location-1)+')').addClass('location-active');

      } else {
         $('.slides-visible').addClass('move-out-right').one('animationend', function (event) {
            $('#button-prev').removeAttr('disabled');
            $('.move-out-right').removeClass('move-out-right').removeClass('slides-visible');
         });
         $('.slides-img:last-child').addClass('slides-visible').addClass('move-into-right').one('animationend', function (event) {
            $('.move-into-right').removeClass('move-into-right');
         });
         $('.slides-location li').removeClass('location-active');
         $('.slides-location li:last-child').addClass('location-active');
      }

      
   });
   

   

});

$(document).ready(function () {
    // button back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    })

    $('#to-top').click(function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });

    // cart
    var removeCartItemButtons = $('.btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        $(button).click(removeCartItem);
    }
    var quantityInputs = $('.cart-quantity-input');
    for (var i = 0; i <quantityInputs.length; i++) {
        var input = quantityInputs[i];
        $(input).change(quantityChanged)         
    }
    function removeCartItem(event){
        var buttonClicked = event.target;
        $(buttonClicked).parent().parent().remove();
        updateCartTotal();
    }

    function quantityChanged(event){
        var input = event.target;
        //kiem tra xem co phai la so hoac be hon 1 k
        if(isNaN(input.value) || input.value<=0) {
            input.value =1;
        }
        updateCartTotal();
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = priceElement.innerText.replace('Đ' , '').split('.').join(''); // remove 'Đ' và dots
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }
        $('.cart-total-price').first().text(numberWithCommas(total) + 'Đ');
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        // \B giữ cho regax k đặt dấu chấm ở đầu chuỗi
        // \d{3} kí tự số xuất hiện 3 lần
        // ?=(\d{3} tìm bất kỳ điểm nào trong chuỗi có bội số 3 chữ số liên tiếp sau nó,
        // "+" Cho phép kí tự trước nó lặp lại 1 lần hoặc nhiều lần
        // ?!\d một khẳng định phủ định để đảm bảo rằng điểm đó chỉ có đúng bội số của 3 chữ số. Biểu thức thay thế đặt dấu chấm ở đó. 
    }

});
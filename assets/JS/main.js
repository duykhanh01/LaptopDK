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
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        $(input).change(quantityChanged)
    }

    var addToCartButtons = $('.btn-buy-now');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        $(button).click(addToCartClicked);
    }




    function removeCartItem(event) {
        var buttonClicked = event.target;
        $(buttonClicked).parent().parent().remove();
        updateCartTotal();
    }

    function quantityChanged(event) {
        var input = event.target;
        //kiem tra xem co phai la so hoac be hon 1 k
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    }

    function addToCartClicked(event) {
        var button = event.target;
        var shopItem = button.parentElement.parentElement.parentElement.parentElement;
        var title = shopItem.getElementsByClassName('info-name')[0].innerText;
        var price = shopItem.getElementsByClassName('info-price')[0].innerText;
        var imgSrc = shopItem.getElementsByClassName('img-src')[0].src;
        // var shopItem = $(button).parent().parent().parent().parent();
        // var title = $('abc, .info-name').text();
        // var price = $('shopItem, .info-price').text();
        // var imgSrc = $('shopItem, .img-main a .img-src').attr('src');
        addItemToCart(title, price, imgSrc);
    }

    function addItemToCart(title, price, imgSrc) {
        var cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        var cartItems = document.getElementsByClassName('cart-items')[0];
        var cartItemsNames = document.getElementsByClassName('cart-item-title');
        // for (var i = 0; i < cartItemsNames.length; i++) {
        //     if(cartItemsNames[i].innerText == title){
        //         alert('Sản phẩm này đã được thêm vào gỏ hàng!');
        //         return;
        //     }
        // }
        var cartRowContens = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContens;
        cartItems.append(cartRow);
        updateCartTotal();
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = priceElement.innerText.replace('Đ', '').split('.').join(''); // remove 'Đ' và dots
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

    $('.btn-cart-next').click(function () {
      
        $('.nav-link.active').parent().next('li').find('button').trigger('click');
    });
    $('.btn-cart-prev').click(function () {
        $('.nav-link.active').parent().prev('li').find('button').trigger('click');
    });
});
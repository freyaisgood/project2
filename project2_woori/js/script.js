$(function() {
    var main_banner = new Swiper('.swiper-container.main_banner', {
        slidesPerView: 1,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(window).scroll(function() {
        // console.log($(this).scrollTop())
        if ($(this).scrollTop() > 160) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    })
    $('.go-top').click(function(e) {
        e.preventDefault();
        $('html,body').animate({ 'scrollTop': '0' }, 500, 'easeOutQuart')
    })
});
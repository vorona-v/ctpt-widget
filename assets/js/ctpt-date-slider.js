var swiper = new Swiper(".ctpt-widget__modal-content-wrap", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    slideToClickedSlide: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 6,
        }
    }

});
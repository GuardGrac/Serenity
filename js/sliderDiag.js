const swiperDiag = new Swiper('.mySwiperDiag', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    breakpoints: {
    768: {
    slidesPerView: 2,
    spaceBetween: 60,
    loop: true,
    },
    1536: {
    slidesPerView: 3,
    spaceBetween: 130,
    loop: true,
    }  
    }});
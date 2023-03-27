  
var swiper = new Swiper('.my-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });


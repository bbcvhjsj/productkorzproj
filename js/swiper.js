const swiper1 = new Swiper('.mySwiper1', {
  speed: 600,
  loop: true,
  autoplay: {
      delay: 2500
  }
});

const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  loop: true,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
},
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 800
    },
},
  thumbs: {
    swiper: galleryThumbs
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
 

  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 0,
      // init: false,
     loop: true,
     slidesPerGroup: 2,
  
    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },

      }
    });

// const slider = document.querySelector('.slider-main');
// const sliderNav = document.querySelector('.slider-nav');

// let mySwiperNav = new Swiper(sliderNav, {
// watchSlidesVisibility: true,
// watchSlidesProgress: true,
// spaceBetween: 300,
// simulateTouch:false,
// loop: true,
// direction: 'horizontal',
// pagination: {
// el: '.swiper-pagination',
// clickable: true,
// },
// breakpoints: {
//     992: {
//       slidesPerView: 1,
//       spaceBetween: 600
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 500
//     },
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 400
//     },
// },
// autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
// },
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev',
// },
// })

let mySwiper = new Swiper(slider, {
spaceBetween: 300,
simulateTouch:false,
loop: true,
breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 800
    },
},
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
thumbs: {
swiper: mySwiperNav,
}
})
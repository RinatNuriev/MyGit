// Articles

const swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 4
    }
  }
});

// About plants

const swiper2 = new Swiper(".aboutPlants", {
  slidesPerView: 3,
  spaceBetween: 30,
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 3
    }
  }
});

// Header

const swiper3 = new Swiper('.header-Swiper', {
  // slidesPerView: 1,
  autoplay: true,
  interval: 10000,
  speed: 2000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Greenbook recently

const swiper4 = new Swiper(".greenbook-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

});


const swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 4,
  spaceBetween: 30,
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

})


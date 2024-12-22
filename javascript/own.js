document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.mySwiper', {
      loop: true, // Enables looping for continuous movement
      autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Autoplay continues even after user interaction
      },
      slidesPerView: 1, // Number of slides visible at a time
      spaceBetween: 10, // Space between slides
      navigation: {
        nextEl: '.swiper-button-next', // If you have navigation buttons
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination', // Add pagination bullets if required
        clickable: true,
      },
    });
  });
  
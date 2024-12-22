// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 30,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: false,
//   },
// });


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,        // Display 4 slides at a time
  spaceBetween: 30,        // Add space between slides
  centeredSlides: true,    // Center active slides
  grabCursor: true,        // Show grab cursor for a better UX
  loop: true,              // Enable looping
  pagination: {
    el: ".swiper-pagination", // Add pagination bullets
    clickable: true,         // Make pagination clickable
  },
  navigation: {            // Optional: Add navigation arrows
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

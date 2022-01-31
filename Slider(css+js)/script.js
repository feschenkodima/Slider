const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '0<span class="' +
        currentClass +
        '"></span>' +
        "    /    " +
        '0<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  animating: true,
  loop: true,
  loopedSlides: 4,
  speed: 800,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-100%", 100, -300],
      opacity: 0.5,
    },
    next: {
      shadow: false,
      translate: ["120%", -300, -600],
      scale: 1.1,
      opacity: 1,
    },
  },
  slidesOffsetAfter: 100,
});

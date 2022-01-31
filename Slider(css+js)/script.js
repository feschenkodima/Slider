const leftImage = document.querySelectorAll(".left-image");
const rightImage = document.querySelectorAll(".right-image");
const nextSlide = document.getElementsByClassName(".swiper-slide-prev-prev");

// const nextSlideChild = nextSlide.querySelectorAll("img");
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
  // on: {
  //   slideChange: function (event) {
  //     leftImage.forEach((item) => {
  //       item.classList.toggle("active");
  //     });
  //     rightImage.forEach((item) => {
  //       item.classList.toggle("active");
  //     });
  //   },
  // },
  // slidesOffsetBefore: 100,
  slidesOffsetAfter: 100,
});

swiper.on("slideChange", function () {
  const elem = swiper.el;
  const leftOfElem = elem.querySelector(".swiper-slide-active .left-image");
  const rightOfElem = elem.querySelector(".swiper-slide-active .right-image");

  // // const childsOfElem = nodesOfElem.querySelectorAll(".left-image");
  // nodesOfElem.classList.toggle("active");
  // console.log(nodesOfElem, nextElem, prevElem);
});

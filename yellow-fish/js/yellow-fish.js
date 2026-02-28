document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".lg-swiper");
  if (!el || typeof Swiper === "undefined") return;

  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 600,
    loop: false,

    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    

    pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
mousewheel: {
  forceToAxis: true,
},
    keyboard: { enabled: true },
  });
});

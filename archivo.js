document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".galeria-sobre-mi", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    const btnVolverArriba = document.querySelector(".btn-volver-arriba");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btnVolverArriba.classList.add("mostrar");
    } else {
      btnVolverArriba.classList.remove("mostrar");
    }
  });
  });
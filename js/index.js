  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".newsSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // const slides = document.querySelector(".slides");
  // const totalSlides = document.querySelectorAll(".slide1").length;
  // let index = 0;

  // setInterval(() => {
  //   index++;
  //   if (index >= totalSlides) {
  //     index = 0;
  //   }
  //   slides.style.transform = `translateX(-${index * 600}px)`;
  // }, 3000);
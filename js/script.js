$(document).ready(function () {
  const $slides = $(".slides");
  const $rows = $(".slides .row");
  const totalSlides = $rows.length;

  let index = 0;
  let direction = 1;
  let autoSlide;

  function showSlide() {
    $slides.css({
      transform: `translateX(-${index * 100}%)`,
      transition: "transform 0.8s ease-in-out",
    });
  }

  function autoSlideShow() {
    index += direction;

    if (index >= totalSlides - 1) {
      direction = -1;
    } else if (index <= 0) {
      direction = 1;
    }

    showSlide();
  }

  $(".right").on("click", function () {
    direction = 1;
    index++;
    if (index >= totalSlides) index = totalSlides - 1;
    showSlide();
    restartAutoSlide();
  });

  $(".left").on("click", function () {
    direction = -1;
    index--;
    if (index < 0) index = 0;
    showSlide();
    restartAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(autoSlideShow, 3000);
  }

  function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  startAutoSlide();
  showSlide();
});

// login box show or hid
$(document).ready(function () {
  $("#loginBtn").click(function () {
    $("#loginBox").fadeIn();
    $("#loginBox").css("display", "block");
  });
  // $("#closeBtn").click(function () {
  //   $("#loginBox").fadeOut();
  // });
});

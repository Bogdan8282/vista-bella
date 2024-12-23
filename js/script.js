$(document).ready(function () {
  $("#slider__list-gallery").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    easing: "linear",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchTreshold: 8,
    touchMove: true,
    waitForAnimate: true,
    centerMode: true,
    centerPadding: "16%",
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {},
      },
    ],
  });
  $("#prev-btn-gallery").click(function () {
    $("#slider__list-gallery").slick("slickPrev");
  });

  $("#next-btn-gallery").click(function () {
    $("#slider__list-gallery").slick("slickNext");
  });

  $("#slider__list-feedback").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    easing: "linear",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchTreshold: 8,
    touchMove: true,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {},
      },
    ],
  });
  $("#prev-btn-feedback").click(function () {
    $("#slider__list-feedback").slick("slickPrev");
  });

  $("#next-btn-feedback").click(function () {
    $("#slider__list-feedback").slick("slickNext");
  });
});
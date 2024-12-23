$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Анімація fade
  document.querySelectorAll(".fade").forEach((fadeElem) => {
    gsap.from(fadeElem, {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: fadeElem.closest(".fade-container"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Анімація flip
  document.querySelectorAll(".flip").forEach((flipElem) => {
    gsap.from(flipElem, {
      rotationY: 180,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: flipElem.closest(".flip-container"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});

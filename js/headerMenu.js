document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const mobileMenu = document.querySelector(".header__mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
});

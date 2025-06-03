const header = document.getElementById("header");

function updateHeader() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", updateHeader);
document.addEventListener("DOMContentLoaded", updateHeader);
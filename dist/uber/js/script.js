window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header-menu"),
    menuItem = document.querySelectorAll(".header-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("header-menu--active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger--active");
      menu.classList.toggle("header-menu--active");
    });
  });
});

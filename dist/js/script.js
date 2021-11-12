const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".menu__close");
closeButton.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  menu.classList.add("menu--active");
});

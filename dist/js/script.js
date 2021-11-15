const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".menu__close");
closeButton.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  menu.classList.add("menu--active");
});

const percents = document.querySelectorAll(".skills-item__percent");
const oranges = document.querySelectorAll(".skills-item__orange-line");

percents.forEach((item, i) => {
  oranges[i].style.width = item.innerHTML;
});
console.log("проценты = ".percents);

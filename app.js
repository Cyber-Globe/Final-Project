let headeEl = document.querySelector(".header");
let btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headeEl.classList.toggle("nav-open");
});

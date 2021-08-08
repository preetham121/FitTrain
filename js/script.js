const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const showcase = document.querySelector(".showcase");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-visible");
  showcase.classList.toggle("showcase-invisible");
});

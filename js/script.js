const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const showcase = document.querySelector(".showcase");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const signIn = document.querySelector(".signIn");
const signUp = document.querySelector(".signup");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-visible");
  showcase.classList.toggle("showcase-invisible");
  line2.classList.toggle("cross-mark2");
  line1.classList.toggle("cross-mark1");
  line3.classList.toggle("cross-mark3");
});

signIn.addEventListener("click", () => {
  alert("Sucessfully Signed In\nThank you for using");
});

signUp.addEventListener("click", () => {
  alert("Sucessfully Signed Up\nThank you for Enrolling");
});

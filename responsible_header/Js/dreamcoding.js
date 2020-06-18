const folder = document.querySelector(".folder");
const navbar_menu = document.querySelector(".navbar_menu");
const navbar_social = document.querySelector(".navbar_social");

document.addEventListener("click", () => {
  navbar_menu.classList.toggle("active");
  navbar_social.classList.toggle("active");
});

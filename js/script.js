const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-secondary", "shadow");
  } else {
    nav.classList.remove("bg-secondary", "shadow");
  }
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(){
  nav.classList.remove("bg-transparent");
  nav.classList.add("bg-secondary");
});
const navMenu = document.querySelector("#nav__menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close"),
  nav_link = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

// header
function scrollHeader() {
  const header = document.getElementById("header");
  

  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
    nav_link.style.color = "#424242";
  } else {
    header.classList.remove("scroll-header");
    nav_link.style.color = "#fffff";
  }
}

window.addEventListener("scroll", scrollHeader);

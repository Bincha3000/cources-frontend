import "./style.sass";

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenuBtn = document.getElementById("mobile-menu-close");
const scrollTop = document.getElementById("scroll-up");
const acc = document.getElementsByClassName("accordion");

menuBtn.addEventListener("click", () => mobileMenu.classList.add("active"));

closeMobileMenuBtn.addEventListener("click", event => {
  event.preventDefault();
  mobileMenu.classList.remove("active");
});

scrollTop.onclick = () => {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener("scroll", () => {
  scrollTop.style.display =
    pageYOffset < document.documentElement.clientHeight ? "none" : "block";
});

if (acc) {
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

import './style.sass'

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.getElementById('mobile-menu-close');
const scrollTop = document.getElementById('scroll-up')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
})

closeMobileMenuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.classList.remove('active');
})

scrollTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function () {
  scrollTop.style.display = pageYOffset < document.documentElement.clientHeight ? 'none' : 'block';
});
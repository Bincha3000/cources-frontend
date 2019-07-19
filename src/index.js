import './style.sass'

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.getElementById('mobile-menu-close');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
})

closeMobileMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.remove('active');
})
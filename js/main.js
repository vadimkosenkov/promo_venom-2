const navBtn = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');

navBtn.addEventListener('click', () => {
    navMenu.classList.add('is-active');
    menuClose.classList.add('is-active');
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('is-active');
    menuClose.classList.remove('is-active');
});
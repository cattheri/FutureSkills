const menuicon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;
const overlay = document.querySelector('.overlay')

menuicon.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    overlay.classList.toggle('active');
});



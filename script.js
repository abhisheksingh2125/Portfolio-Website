const header = document.querySelector("header");
window.addEventListener("scroll ", function() {
    header.classList.toggle("sticky", window.scrollY > 100)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

const readMoreLinks = document.querySelectorAll('.read');

readMoreLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.geeksforgeeks.org/web-development/';
    });
});
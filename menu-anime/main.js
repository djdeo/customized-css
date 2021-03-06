const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

menuIcon.onclick = function() {
    menuIcon.classList.toggle('show')
    menu.classList.toggle('show')
    menuNav.classList.toggle('show')
    menuBranding.classList.toggle('show')
    navItems.forEach(item => item.classList.toggle("show"));
}
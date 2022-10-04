// const navbar = document.querySelector('.navbar');
const navbarShow = document.querySelector('.navbar-collapse');
const navItem1 = document.querySelector('.item-1');
// const navItem2 = document.querySelector('.dropdown');
const navItem3 = document.querySelector('.item-3');
const navItem4 = document.querySelector('.item-4');
const navDropdown = document.querySelectorAll('.dropdown-menu');


navItem1.addEventListener('click', () => navbarShow.classList.remove('show'))
// navItem2.addEventListener('click', () => navbarShow.classList.remove('show'))
navItem3.addEventListener('click', () => navbarShow.classList.remove('show'))
navItem4.addEventListener('click', () => navbarShow.classList.remove('show'))

navDropdown.forEach(item => item.addEventListener('click', () => navbarShow.classList.remove('show')))
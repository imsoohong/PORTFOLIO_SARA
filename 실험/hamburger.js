'use strict'


const navbarMenu = document.querySelector('.navbar__menu');

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

/* 토글 버튼 */
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    // console.log('토글 버튼 실행');
});

const manMenu = document.querySelector('.man__menu');
const womanMenu = document.querySelector('.woman__menu');

const navbarMenu2 = document.querySelector('.navbar__menu2');
const navbarMenu3 = document.querySelector('.navbar__menu3');

manMenu.addEventListener('click', () => {
    // console.log('남자 메뉴 클릭');
    navbarMenu2.classList.toggle('open');
    navbarMenu3.classList.remove('open');
});

womanMenu.addEventListener('click', () => {
    // console.log('여자 메뉴 클릭');
    navbarMenu3.classList.toggle('open');
    navbarMenu2.classList.remove('open');
});
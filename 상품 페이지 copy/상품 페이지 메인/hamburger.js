'use strict'


const navbarMenu = document.querySelector('.navbar__menu');

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

/* 토글 버튼 */
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    // console.log('토글 버튼 실행');
});

/* 남자 메뉴 */
const manMenu = document.querySelector('.man__menu');
const manList = document.querySelector('.man__list');

/* 여자 메뉴 */
const womanMenu = document.querySelector('.woman__menu');
const womanList = document.querySelector('.woman__list');

/* 남자 메뉴 클릭 */
manMenu.addEventListener('click', () => {
    // console.log('남자 메뉴 클릭');
    manList.classList.toggle('open');
    womanList.classList.remove('open');
});

/* 여자 메뉴 클릭 */
womanMenu.addEventListener('click', () => {
    // console.log('여자 메뉴 클릭');
    womanList.classList.toggle('open');
    manList.classList.remove('open');
});
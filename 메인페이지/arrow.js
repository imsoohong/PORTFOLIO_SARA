'use strict'

const header = document.querySelector('.header');

const headerHeight = header.getBoundingClientRect().height;


// 스크롤 내리면 arrow up 버튼 보이게 하기
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// arrow up 버튼 누르면 #home으로 가게 하기
arrowUp.addEventListener('click', () => {
    scrollIntoView('.arrow-up-div');
    console.log('작동완료');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  };
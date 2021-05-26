'use strict';

const togglebtn = document.querySelector('.toggle');

const navmenu = document.querySelector('.nav__menu');

const overlay = document.querySelector('.md__overlay');

const openModal = () => {
    navmenu.classList.remove("hidden");
}

const closeModal = () => {
    navmenu.classList.add("hidden");
}

togglebtn.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);
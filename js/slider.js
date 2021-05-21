//slide-wrap
let slideWrapper = document.getElementById('slider-wrap');
//current slideIndexition
let slideIndex = 0;
//items
let slides = document.querySelectorAll('#slider-wrap ul li');
//number of slides
let totalSlides = slides.length;
//get the slide width
let sliderWidth = slideWrapper.clientWidth;
//set width of items
slides.forEach(function (element) {
    element.style.width = sliderWidth + 'px';
})
//set width to be 'x' times the number of slides
let slider = document.querySelector('#slider-wrap ul#slider');
slider.style.width = sliderWidth * totalSlides + 'px';

// next, prev
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

// hover
slideWrapper.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider = setInterval(function () {
        plusSlides(1);
    }, 3000);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    pagination();
}

//pagination
slides.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap ul').appendChild(li);
})

function pagination() {
    var dots = document.querySelectorAll('#slider-pagination-wrap ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex].classList.add('active');
}

pagination();
var autoSlider = setInterval(function () {
    plusSlides(1);
}, 3000);
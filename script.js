// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Change slides every 3 seconds
setInterval(changeSlide, 3000);

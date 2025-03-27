// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle 'active' class to show/hide nav
    hamburger.classList.toggle('active'); // Add class to change hamburger icon
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; // Hide all slides
    });

    currentSlide = (currentSlide + 1) % totalSlides; // Move to next slide, loop around
    slides[currentSlide].style.display = 'block'; // Show current slide
}

// Automatically change slides every 3 seconds
setInterval(changeSlide, 3000);

// Initially display the first slide
slides.forEach((slide, index) => {
    if (index !== currentSlide) {
        slide.style.display = 'none';
    }
});

// Search Functionality
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log('Searching for:', query);
        // Implement search logic here
        // You can use the query to filter products or redirect to a search results page
    } else {
        console.log('Please enter a search term');
    }
});

/*vedio*/
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
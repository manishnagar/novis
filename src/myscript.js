// navbar js code[start]
const toggleButton = document.getElementById("navbar-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// slider js code[start]
const images = [
  '/images/slider22.png', 
  '/images/slider23.png', 
  '/images/slider24.png', 
  '/images/slider25.png'
];

let currentIndex = 0;
const backgroundImage = document.getElementById('backgroundImage');
// Left arrow click handler
document.getElementById('leftArrow').addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  backgroundImage.src = images[currentIndex]; 
});
// Right arrow click handler
document.getElementById('rightArrow').addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % images.length; 
  backgroundImage.src = images[currentIndex]; 
});



// scroll to top js code [start]
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.remove('opacity-0', 'pointer-events-none');
    scrollToTopButton.classList.add('opacity-100', 'pointer-events-auto');
  } else {
    scrollToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
    scrollToTopButton.classList.add('opacity-0', 'pointer-events-none');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// feedback form  js code[start]

const feedbackButton = document.getElementById('feedbackButton');
  const contactForm = document.getElementById('contactForm');

  feedbackButton.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
  });
  
  closeButton.addEventListener('click', () => {
    contactForm.classList.add('hidden');
  });






// navbar js code[start]
const toggleButton = document.getElementById("navbar-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// slider js code[start]
const images = [
  './images/slider22.png', 
  './images/slider23.png', 
  './images/slider24.png', 
  './images/slider25.png'
];

let currentIndex = 0;
const backgroundImage = document.getElementById('backgroundImage');

// Function to update the image
function updateImage(index) {
  backgroundImage.src = images[index];
}

// Left arrow click handler
document.getElementById('leftArrow').addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateImage(currentIndex);
  resetAutoplay(); // Reset autoplay timer on manual action
});

// Right arrow click handler
document.getElementById('rightArrow').addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % images.length; 
  updateImage(currentIndex);
  resetAutoplay(); // Reset autoplay timer on manual action
});

// Autoplay functionality
let autoplayInterval = 4000; // Change image every 3 seconds
let autoplayTimer = setInterval(function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
}, autoplayInterval);

// Reset autoplay timer
function resetAutoplay() {
  clearInterval(autoplayTimer); // Stop current timer
  autoplayTimer = setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  }, autoplayInterval);
}

// Ensure the first image is displayed initially
updateImage(currentIndex);





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





  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('popupModal');
    const checkbox = document.getElementById('acceptTerms');
    const proceedButton = document.getElementById('proceedButton');
    const body = document.body;

    // Display the modal and disable body scrolling
    modal.classList.remove('hidden');
    body.classList.add('overflow-hidden');

    // Disable interaction with the rest of the page
    body.style.pointerEvents = 'none'; // Disable interactions globally
    modal.style.pointerEvents = 'auto'; // Enable interactions only with the modal

    // Enable the "Proceed" button only when the checkbox is checked
    checkbox.addEventListener('change', function () {
      proceedButton.disabled = !checkbox.checked;
    });

    proceedButton.addEventListener('click', function () {
      modal.classList.add('hidden');
      body.classList.remove('overflow-hidden');
      body.style.pointerEvents = ''; // Re-enable interactions globally
    });
  });
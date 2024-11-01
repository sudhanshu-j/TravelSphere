// Select the preloader element from the DOM
const preloader = document.querySelector(".preloader");

// Remove preloader when the window has fully loaded
window.addEventListener("load", () => {
  preloader.classList.add("remove"); // Adds the 'remove' class to the preloader to hide it
});

// Select navigation togglers and navbar elements
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); // Get all elements that toggle the navigation
const navBar = document.querySelector("[data-navbar]"); // Select the navigation bar
const overlay = document.querySelector("[data-overlay]"); // Select the overlay element

// Function to add event listeners to multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback); // Add the event listener to each element
  }
};

// Function to toggle navigation and overlay visibility
const toggleNav = function () {
  navBar.classList.toggle("active"); // Toggle 'active' class on navbar
  overlay.classList.toggle("active"); // Toggle 'active' class on overlay
  document.body.classList.toggle("nav-active"); // Toggle 'nav-active' class on body
};

// Attach the toggleNav function to the click event on nav togglers
addEventOnElements(navTogglers, "click", toggleNav);

// Select header element from the DOM
const header = document.querySelector("[data-header]");
// Add scroll event listener to change header style based on scroll position
window.addEventListener("scroll", function () {
  header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active"); // Add 'active' class if scrolled down more than 100px
});

// Function to show or hide the scroll-to-top button based on scroll position
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up"); // Select the scroll-up button
  // Add 'show-scroll' class to scroll-up button if scrolled down more than 350px
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll") // Show the button
    : scrollUp.classList.remove("show-scroll"); // Hide the button
};

// Add scroll event listener for the scroll-up function
window.addEventListener("scroll", scrollUp);

//=========== Adding Scroll Reveal Animation To Each Section Classes ===========//

// Initialize ScrollReveal with specified configuration options
const sr = ScrollReveal({
  origin: "top", // Elements will appear from the top
  distance: "60px", // Elements will move 60px from their original position
  duration: 3000, // Animation duration is 3000 milliseconds (3 seconds)
  delay: 400, // Each element will have a 400ms delay before starting the animation
  reset: true, // Elements will reappear when scrolled into view again
});

// Reveal specified elements with the default settings
sr.reveal(
  `.service .container, .section-subtitle, .section-title, .destinations-card-2, 
  .destinations-card-5, .experience-shape, .gallery-item-1, .gallery-item-2, .gallery-item-3, .footer`
);

// Reveal these elements from the right side
sr.reveal(
  `.hero-banner, .destinations-card-3, .destinations-card-6, .experience-content, .gallery-item-4, .gallery-item-6, .bottom-list`,
  {
    origin: "right", // Elements will appear from the right
  }
);

// Reveal these elements from the left side
sr.reveal(
  `.hero-content, .hero-btn, .destinations-card-1, .destinations-card-4, .banner-2, .gallery-item-5, .copyright`,
  {
    origin: "left", // Elements will appear from the left
  }
);

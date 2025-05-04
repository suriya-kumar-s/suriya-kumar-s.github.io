// Dark Mode Toggle Function
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Smooth Scrolling for Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // offset for header
      behavior: "smooth",
    });
  });
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Fade-in effect for elements when they come into view
window.addEventListener("load", () => {
  revealOnScroll();
});

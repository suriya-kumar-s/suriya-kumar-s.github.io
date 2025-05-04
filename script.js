document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Get target ID from href
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Offset to make sure header doesn't cover it
        behavior: 'smooth'
      });
    });
  });

  // Animation for elements when they are in viewport
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('in-viewport');
      } else {
        element.classList.remove('in-viewport');
      }
    });
  };

  // Listen for scroll event
  window.addEventListener('scroll', animateOnScroll);

  // Initial call to check elements already in viewport
  animateOnScroll();
});

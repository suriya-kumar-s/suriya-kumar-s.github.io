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
});

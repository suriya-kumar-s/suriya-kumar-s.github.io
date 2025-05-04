document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector('.cta-button');

  // Add smooth scroll animation for CTA button
  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(ctaButton.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Hero Animation (Using CSS Animations or JavaScript Libraries)

window.onload = function() {
    // Example animation initialization (for now, just an example of a fade-in effect)
    const heroAnimation = document.getElementById('animation');
    heroAnimation.style.animation = 'fadeIn 3s ease-in-out forwards';

    // Add other interactive animations if necessary
}

// Fade-in Animation (you can define more complex animations or use libraries)
const styles = document.createElement('style');
styles.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(styles);

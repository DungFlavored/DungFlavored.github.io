

// Split Text Animation
function splitTextAnimation(element) {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
    element.querySelectorAll('span').forEach((span, index) => {
        span.style.animationDelay = `${index * 0.05}s`;
    });

    window.addEventListener('scroll', () => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        }
    });
}

document.querySelectorAll('.split-text').forEach(splitTextAnimation);

// Smooth Scroll Reveal with Parallax
function handleScrollReveal() {
    document.querySelectorAll('.parallax').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollReveal);
handleScrollReveal(); // Initial call to reveal elements in view

document.querySelectorAll('h2').forEach(splitTextAnimation);

function redirectToAccount() {
    window.location.href = 'account.html';
}

function redirectToRegister() {
    window.location.href = 'register.html';
}
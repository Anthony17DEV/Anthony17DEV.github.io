document.addEventListener('DOMContentLoaded', function() {

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navLinks = document.querySelector('.nav-links');

    menuHamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});
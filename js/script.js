document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const skillBars = document.querySelectorAll('.skill-progress');
    const header = document.querySelector('.header');

    // 1. Toggle do menu hambúrguer (mobile)
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 2. Fecha o menu ao clicar em um link (melhora UX mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Animação das barras de habilidades quando entram na viewport
    // Intersection Observer é vanilla JS moderno, aceito em vagas JR
    const observerOptions = {
        threshold: 0.5 // Dispara quando 50% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = `${width}%`;
                observer.unobserve(skillBar); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));

    // 4. Header com fundo mais opaco ao rolar (efeito comum em portfólios modernos)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 25, 47, 1)';
        } else {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        }
    });
});

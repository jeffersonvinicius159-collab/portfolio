document.addEventListener('DOMContentLoaded', () => {
    // 1. PRELOADER: Desaparece após 2.5 segundos
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            preloader.style.transition = 'opacity 0.5s ease';
        }, 2500);
    }

    // 2. MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. SCROLL SUAVE PARA LINKS INTERNOS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. HEADER COM FUNDO MAIS OPACO AO ROLAR
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(10, 10, 10, 1)';
            } else {
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            }
        });
    }

    // 5. REVELAÇÃO DE SEÇÕES AO ROLAR (efeito sutil)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Aplica estado inicial se não for hero
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        }
    });

    // 6. CAROUSEL DE MOVIMENTOS: Garante loop infinito (duplica se necessário)
    const movementsTrack = document.querySelector('.movements-track');
    if (movementsTrack && movementsTrack.children.length <= 8) {
        // Se já não foi duplicado no HTML, duplica aqui
        const items = movementsTrack.innerHTML;
        movementsTrack.innerHTML = items + items;
    }
});

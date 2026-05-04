document.addEventListener('DOMContentLoaded', () => {
    // 1. PRELOADER - Desaparece após 2.5 segundos
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease';
    }, 2500);

    // 2. MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. CAROUSEL DE ESTATÍSTICAS (LOOP INFINITO)
    const statsTrack = document.querySelector('.carousel-track');
    if (statsTrack) {
        // Duplica o conteúdo para criar loop infinito
        const statsItems = statsTrack.innerHTML;
        statsTrack.innerHTML = statsItems + statsItems;
    }

    // 4. CAROUSEL DE FOTOS (SOBRE MIM)
    const photoCarousel = document.querySelector('.photo-carousel');
    if (photoCarousel) {
        // Duplica o conteúdo para criar loop infinito
        const photos = photoCarousel.innerHTML;
        photoCarousel.innerHTML = photos + photos;
    }

    // 5. SCROLL SUAVE PARA LINKS INTERNOS
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

    // 6. HEADER COM FUNDO MAIS OPACO AO ROLAR
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 13, 13, 1)';
        } else {
            header.style.backgroundColor = 'rgba(11, 13, 13, 0.95)';
        }
    });
});

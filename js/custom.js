// Custom JavaScript for Shaik Hidaythulla's Portfolio

document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize progress bars if any
    const progressBars = document.querySelectorAll('.progress-bar[data-width]');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });

    // 2. Initialize project carousel
    if ($('.project-carousel').length > 0) {
        $('.project-carousel').owlCarousel({
            center: false,
            loop: true,
            items: 1,
            margin: 25,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 60000, // 1 minute in milliseconds
            autoplayHoverPause: true,
            nav: true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 2,
                    nav: true,
                    dots: true
                },
                1024: {
                    items: 3,
                    nav: true,
                    dots: true
                }
            }
        });
    }

    // 3. Initialize project card images with correct extensions
    const projectImages = document.querySelectorAll('.block-20[data-bg]');
    projectImages.forEach(image => {
        const bgName = image.getAttribute('data-bg');
        let extension = 'jpeg';

        if (bgName === 'proj_1' || bgName === 'proj_2' || bgName === 'proj_3') {
            extension = 'webp';
        } else if (bgName === 'proj_6' || bgName === 'proj_7') {
            extension = 'png';
        }

        image.style.backgroundImage = `url('images/${bgName}.${extension}')`;
    });

    // 4. Staggered subtle animation for tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.05}s`;
    });

    // 5. Back to top button visibility and smooth scroll
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. Mobile navbar: auto-close collapse on link click
    $('.navbar-nav .nav-link').on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
            $('.js-fh5co-nav-toggle').removeClass('active');
        }
    });

    // 7. Smooth scrolling for internal anchor links (excluding # alone)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 8. Active class sync on scroll for nav items
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 220;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.navbar-nav a.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

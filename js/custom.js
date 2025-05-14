// Custom JavaScript for Shaik Hidaythulla's Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bars
    const progressBars = document.querySelectorAll('.progress-bar[data-width]');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });

    // Initialize project carousel with 1-minute autoplay
    $('.project-carousel').owlCarousel({
        center: false,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 60000, // 1 minute in milliseconds
        autoplayHoverPause: true,
        nav: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Note: Home slider initialization is now handled in index.html

    // Initialize project images
    const projectImages = document.querySelectorAll('.block-20[data-bg]');
    projectImages.forEach(image => {
        const bgName = image.getAttribute('data-bg');
        let extension;

        // Set the correct extension for each project image
        if (bgName === 'proj_1' || bgName === 'proj_2' || bgName === 'proj_3') {
            extension = 'webp';
        } else if (bgName === 'proj_6' || bgName === 'proj_7') {
            extension = 'png';
        } else {
            extension = 'jpeg';
        }

        image.style.backgroundImage = `url('images/${bgName}.${extension}')`;
    });

    // Add animation to tech stack badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to nav items on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.navbar-nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

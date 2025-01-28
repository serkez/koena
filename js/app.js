document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    // Function to remove active class from all links
    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    // Function to add active class to the current link
    const addActiveClass = (id) => {
        removeActiveClasses();
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
    };

    // Function to update active link on scroll
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section'); // All sections to track
        const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Navbar links
        const offset = 150; // Offset for navbar height or padding
        let currentSectionId = '';

        // Determine which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id'); // Get the section ID
            }
        });

        // Update active link based on the current section
        navbarLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Click Event Listener
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHref = link.getAttribute('href');

            // Check if it's an internal link (starts with #)
            if (targetHref.startsWith('#')) {
                e.preventDefault(); // Prevent default behavior for internal links
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                        behavior: 'smooth',
                    });

                    addActiveClass(targetId);
                }
            }
            // External links (e.g., Instagram) are not prevented
        });
    });
});


document.addEventListener('scroll', function () {
    const navbarToggler = document.querySelector('.navbar-toggler'); // The toggle button
    const navbarCollapse = document.querySelector('.navbar-collapse'); // The dropdown menu

    // Check if the dropdown menu is open
    if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Programmatically click the toggler to close the menu
    }
});

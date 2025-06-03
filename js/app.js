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

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      // Clear the form
      document.querySelector("form")?.reset();

      // Scroll to top
      window.scrollTo(0, 0);

      // Clean up the URL
      history.replaceState({}, document.title, window.location.pathname);
    }
  });
  
// document.addEventListener("DOMContentLoaded", function () {
//     const languageOptions = document.querySelectorAll(".language-option");

//     languageOptions.forEach(option => {
//         option.addEventListener("click", function (event) {
//             event.preventDefault();
//             const selectedLang = this.getAttribute("data-lang");

//             // Store language preference
//             localStorage.setItem("selectedLang", selectedLang);

//             // Apply language settings
//             applyLanguage(selectedLang);
//         });
//     });

//     // Check stored language preference
//     const savedLang = localStorage.getItem("selectedLang") || "en";
//     applyLanguage(savedLang);
// });

// function applyLanguage(lang) {
//     document.documentElement.setAttribute("lang", lang);

//     if (lang === "he") {
//         document.documentElement.setAttribute("dir", "rtl");
//         document.body.classList.add("rtl");
//         document.body.classList.remove("ltr");

//         // Enable RTL stylesheet
//         document.getElementById("rtl-style").removeAttribute("disabled");
//     } else {
//         document.documentElement.setAttribute("dir", "ltr");
//         document.body.classList.add("ltr");
//         document.body.classList.remove("rtl");

//         // Disable RTL stylesheet
//         document.getElementById("rtl-style").setAttribute("disabled", "true");
//     }

//     // Apply text translations
//     const translations = {
//         "en": {
//             "welcome": "Welcome to Koena",
//             "welcome_subtitle": "Workshops to elevate and enrich your wellness journey.",
//             "miriam": "Miriam",
//             "about_miriam": "About The Founder",
//             "about": "About Us",
//             "about": "About Us",
//             "services": "Services",
//             "contact": "Contact Us",
//             "sendMessage": "Send Message",
//             "name": "Name",
//             "email": "Email",
//             "message": "Message"
//         },
//         "he": {
//             "welcome": "ברוכים הבאים לקואנה",
//             "welcome_subtitle": "סדנאות להעלאת והעשרת מסע הבריאות שלך.",
//             "miriam": "מרים סרקז",
//             "about_miriam": "אודותינו",
//             "about": "אודותינו",
//             "services": "שירותים",
//             "contact": "צור קשר",
//             "sendMessage": "שלח הודעה",
//             "name": "שם",
//             "email": "אימייל",
//             "message": "הודעה"
//         }
//     };

//     // Update text content
//     document.querySelector("#welcome-to-koena").textContent = translations[lang].welcome;
//     document.querySelector("#welcome-subtitle").textContent = translations[lang].welcome_subtitle;
//     document.querySelector("#miriam").textContent = translations[lang].miriam;
//     document.querySelector("#about-miriam").textContent = translations[lang].about_miriam;
//     document.querySelector("#about h2").textContent = translations[lang].about;
//     document.querySelector("#services h2").textContent = translations[lang].services;
//     document.querySelector("#contact h2").textContent = translations[lang].contact;
//     document.querySelector("button[type='submit']").textContent = translations[lang].sendMessage;
//     document.querySelector("label[for='name']").textContent = translations[lang].name;
//     document.querySelector("label[for='email']").textContent = translations[lang].email;
//     document.querySelector("label[for='message']").textContent = translations[lang].message;
// }

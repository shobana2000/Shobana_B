 function toggleMenu() {
        var menuToggle = document.querySelector('.menu-toggle');
        var nav = document.querySelector('nav');
        document.body.classList.toggle('menu-open');
        nav.classList.toggle('show');
    }

    function scrollToTop() {
        // Use document.documentElement for better cross-browser compatibility
        document.documentElement.scrollTop = 0;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var menuToggle = document.querySelector('.menu-toggle');
        var menuIcon = document.querySelector('.menu-icon');
        var nav = document.querySelector('nav');
        var scrollButton = document.querySelector('.scroll-to-top');

        menuToggle.addEventListener('click', toggleMenu);
        menuIcon.addEventListener('click', toggleMenu);

        // Show or hide the scroll button based on the user's scroll position
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              scrollButton.style.display = 'block';
            } else {
              scrollButton.style.display = 'none';
            }
        });
    });

    function toggleMobileNumber() {
        var mobileNumber = document.getElementById('mobile-number');
        var button = document.querySelector('button');
        var socialSection = document.getElementById('social');

        if (mobileNumber.style.display === 'none') {
            mobileNumber.style.display = 'block';
            button.textContent = 'Hide Mobile Number';

            // Check if the social media section is visible, if not, scroll to it
            if (socialSection && socialSection.style.display === 'none') {
              socialSection.style.display = 'block';
              // Scroll to the social media section
              socialSection.scrollIntoView({ behavior: 'smooth' });
            }
            } else {
                mobileNumber.style.display = 'none';
                button.textContent = 'Show Mobile Number';
        }
    }


    // JavaScript for the slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let container = document.getElementById("slideshow-container");
        slideIndex++;

        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }

        let translateValue = `translateX(${-slideIndex * 100}%)`;
        container.style.transform = translateValue;

        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
    // Use GSAP for animations
gsap.from("header", { opacity: 0, duration: 1, delay: 0.5 });
gsap.from("section", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });

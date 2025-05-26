// Custom JavaScript for Dr. I-Li Huang website

window.addEventListener('DOMContentLoaded', event => {

    // Force navbar to "scrolled" state always
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (navbarCollapsible) {
        navbarCollapsible.classList.add('navbar-scrolled');
    }

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72, // Adjust this value based on your navbar height
        });
    }

    // Collapse responsive navbar when toggler is visible and a link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                let navbarHeight = 0;
                const navbar = document.querySelector('#mainNav.navbar-scrolled'); // Ensure we get height of styled navbar
                if (navbar && getComputedStyle(navbar).position === 'fixed') {
                    navbarHeight = navbar.offsetHeight;
                }
                
                let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                let offsetPosition = elementPosition - navbarHeight;

                if (targetId === '#page-top') {
                    offsetPosition = 0;
                }
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

}); 
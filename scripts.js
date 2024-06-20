document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const closeHamburger = document.querySelector('.close-hamburger');
    const por2 = document.querySelector('.por2');
    const astro = document.querySelector('.astro');
    const por3 = document.querySelector('.por3');
    const ship = document.querySelector('.ship');
    const r2 = document.querySelector('.r2');
    const r3 = document.querySelector('.r3');
    const r1 = document.querySelector('.r1');

    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    closeHamburger.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Function to check if por2 is in view
    function isPor2InView() {
        const rect = por2.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Event listener for scroll to check if por2 is in view
    window.addEventListener('scroll', () => {
        if (isPor2InView()) {
            astro.classList.add('visible');
        }
    });
    // Function to check if por2 is in view
    function isPor3InView() {
        const rect = por3.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Event listener for scroll to check if por2 is in view
    window.addEventListener('scroll', () => {
        if (isPor3InView()) {
            ship.classList.add('visible');
        }
    });
    window.addEventListener('scroll', () => {
        if (isPor3InView()) {
            r2.classList.add('visible');
        }
    });
    window.addEventListener('scroll', () => {
        if (isPor3InView()) {
            r1.classList.add('visible');
        }
    });
    window.addEventListener('scroll', () => {
        if (isPor3InView()) {
            r3.classList.add('visible');
        }
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const sideMenu = document.querySelector('.side-menu');
//     const closeHamburger = document.querySelector('.close-hamburger');

//     hamburger.addEventListener('click', () => {
//         sideMenu.classList.toggle('active');
//     });

//     closeHamburger.addEventListener('click', () => {
//         sideMenu.classList.remove('active');
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const sideMenu = document.querySelector('.side-menu');
//     const closeHamburger = document.querySelector('.close-hamburger');

//     hamburger.addEventListener('click', () => {
//         sideMenu.classList.toggle('active');
//     });

//     closeHamburger.addEventListener('click', () => {
//         sideMenu.classList.remove('active');
//     });
// });

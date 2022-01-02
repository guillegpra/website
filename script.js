$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky'); // to change color of navbar when scrolling
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// min 1:45:34 https://www.youtube.com/watch?v=tcskp-ncN0I
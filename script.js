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
});

// min 26:10 https://www.youtube.com/watch?v=tcskp-ncN0I
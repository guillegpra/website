$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky'); // to change color of navbar when scrolling
        } else {
            $('.navbar').removeClass('sticky');
        }
    })
});

// min 18:32 https://www.youtube.com/watch?v=tcskp-ncN0I
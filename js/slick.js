$(document).ready(function () {
    $('#slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        cssEase: "linear",
        variableWidth: true,
        prevArrow: '<span class="prev__arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next__arrow"><i class="fas fa-angle-right"></i></span>'
    });
});

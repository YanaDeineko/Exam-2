$('a[href*="#"]').click(function () {
    $('html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

$(window).scroll(function () {
    $(".menu__nav-dots").removeClass("dots-active");
    let scroll = $(window).scrollTop() + 4;
    if (scroll > $("#header").offset().top) paintDot("#header");
    if (scroll > $("#projects").offset().top) paintDot("#projects");
    if (scroll > $("#news").offset().top) paintDot("#news");
    if (scroll > $("#footer").offset().top) paintDot("#footer");
});

let paintDot = (menuItemId) => {
    $(".menu__nav-dots").removeClass("dots-active")
        .filter(`:parent[href = '${menuItemId}']  span`).addClass("dots-active");
};

$(window).scroll(function () {
    $(".banner__nav-dots").removeClass("nav__dots-active");
    let scroll = $(window).scrollTop() + 5;
    if (scroll > $('#header').offset().top) paintDotVerticall('#header');
    if (scroll > $("#projects").offset().top) paintDotVerticall("#projects");
    if (scroll > $("#news").offset().top) paintDotVerticall("#news");
    if (scroll > $("#gallery").offset().top) paintDotVerticall("#gallery");
    if (scroll > $("#footer").offset().top) paintDotVerticall("#footer");
});

let paintDotVerticall = (linkId) => {
    $(".banner__nav-dots").removeClass("nav__dots-active")
        .filter(`:parent[href = '${linkId}']  span`).addClass("nav__dots-active");
};

$('#jsMenuMobile').on('click', function () {
    $('header').toggleClass('menu__open');
})

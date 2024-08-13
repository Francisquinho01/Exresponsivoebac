$(document).ready(function () {
    $('#Car').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600, // Tela menor que 768px
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

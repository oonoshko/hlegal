$('#slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,    
});

$('#sliderAbout').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false, 
    mobileFirst: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }   
    }
    ]
});
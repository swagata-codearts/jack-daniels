// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

jQuery('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

jQuery('.slider-nav')
  .on('init', function(event, slick) {
    jQuery('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
     }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
   }
    }]
  });

jQuery('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  jQuery('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  jQuery('.slider-nav .slick-slide.is-active').removeClass('is-active');
  jQuery(currrentNavSlideElem).addClass('is-active');
});

jQuery('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = jQuery(this).data('slick-index');

  jQuery('.slider-single').slick('slickGoTo', goToSingleSlide);
});

jQuery(document).ready(function(){
  jQuery(".custom-navbar-toggler").click(function(e)    {
      jQuery(this).toggleClass("close")
      e.stopPropagation()
  })
  
});


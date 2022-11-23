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

jQuery(document).ready(function(){
  jQuery(".custom-navbar-toggler").click(function()    {
      jQuery(this).toggleClass("close")
  })
});


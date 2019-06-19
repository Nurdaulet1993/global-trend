$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        loop: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            593:{
                items:1,
                nav:true
            },

        }
    });
});
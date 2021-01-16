(function ($) {
	"use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    var windows = $(window);
    var stick = $(".header-sticky");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 245) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	}); 
    
/*----------------------------------------
    02. Owl Carousel
---------------------------------------- */
/*----------------------------------------
    Slider Carousel
---------------------------------------- */
    $(".slider-wrapper").owlCarousel({
        loop: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        items:1,
		margin: 0,
        nav: true,
        navText: ["<i class='zmdi zmdi-caret-left'></i>","<i class='zmdi zmdi-caret-right'></i>"],
        dots:false,
		responsiveClass:true,
        responsive:{
            0:{
                items:1,
				nav:true,
                autoHeight:true
            },
            600:{
                items:1,
				nav:true,
                autoHeight:true
            },
            1000:{
                items:1,
				nav:true,
                autoHeight:true
            }
        }
    });
/*--------------------------------------
    Testimonial Carousel
--------------------------------------- */
	$('.testimonial-wrapper').owlCarousel({
		loop: true,
		margin: 0,
		merge: true, 
        dots: false,
        nav: true,
        navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
		autoplay: true,
		smartSpeed:3000,
		items: 1
	}); 
/*-------------------------------------
    Blog Carousel
-------------------------------------- */
    $(".blog-carousel").owlCarousel({
        loop:true,
        items:3,
        dots: false,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            }, 
            992:{
                items:2
            }, 
            1200:{
                items:3
            }
		}
    });  
    
/*------------------------------------
    Client Carousel
------------------------------------- */
	$('.client-carousel').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
        responsiveClass:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:5
            }
		}
    });   
    
/*------------------------------------
    03. Isotope
-------------------------------------- */ 
	$('.grid').imagesLoaded( function() {
		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	
        
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		  }
		});
	});
    
/*------------------------------------
    04. Imageload
-------------------------------------- */ 
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});	
    
/*-------------------------------------------
    05. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
    
/*--------------------------
    06. Magnific Popup
---------------------------- */	
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
/*-----------------------------------------
    07. Counter Up
------------------------------------------ */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
	
/*------------------------------------------
    08. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    09. Wow js
--------------------------------------------- */    
    new WOW().init();

/*----------------------------------------
	10. Slick Carousel
------------------------------------------*/
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slider',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        vertical :true,
        responsive: [{
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        }]
    });
	
})(jQuery);  
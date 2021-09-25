$(document).ready(function () {
  
  $('.home-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000, //DELAY BEFORE NEXT SLIDE IN MILISECONDS
    speed: 800, //SPEED OF THE SLIDER CHANGE
    arrows: true,
       prevArrow: '<span class="arrow_Prev"><i class="la la-angle-left"></i></span> ',
    nextArrow: '<span class="arrow_Next"><i class="la la-angle-right"></i></span>',
      
  });
//   feature products slider 
	$('.feature-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="arrow_Prev"><i class="la la-angle-left"></i></span> ',
    nextArrow: '<span class="arrow_Next"><i class="la la-angle-right"></i></span>',
    responsive: [
       {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: false
      }
    },
      {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },


    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
     {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  // mega menu 
  window.addEventListener("resize", function() {
		"use strict"; window.location.reload(); 
	});

	document.addEventListener("DOMContentLoaded", function(){
		 // make it as accordion for smaller screens
		if (window.innerWidth < 992) {

			document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
				
				element.addEventListener('click', function (e) {

				  	let nextEl = element.nextElementSibling;
				  	let parentEl  = element.parentElement;
				  	let allSubmenus_array =	parentEl.querySelectorAll('.submenu');

				  	if(nextEl && nextEl.classList.contains('submenu')) {	
				  		e.preventDefault();	
				  		if(nextEl.style.display == 'block'){
				  			nextEl.style.display = 'none';

				  		} else {
				  			nextEl.style.display = 'block';
				  		}

				  	}
				});
			})
		}
		// end if innerWidth

	}); 
	// DOMContentLoaded  end mega menu end
});

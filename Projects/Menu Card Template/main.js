// Initialize WOW.js
new WOW().init();

// Smooth scrolling on click of menu item
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// Parallax effect on background image
$(window).scroll(function(){
  var parallax = $(this).scrollTop();
  $('.parallax-bg').css('background-position', 'center '+(parallax*0.4)+'px');
});

// Show/hide menu on mobile devices
$('.navbar-toggler').on('click', function() {
  $('.navbar-collapse').slideToggle();
});

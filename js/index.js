// Foundation JS

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
        indicators: true
      });
    $('.next').click(function() {
    $('.carousel.carousel-slider').carousel('next');
    });
    $('.prev').click(function() {
    $('.carousel.carousel-slider').carousel('prev');
    });
    $('.parallax').parallax();
  });
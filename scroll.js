$(document).ready(function() {
  // Smooth scroll to #gallery
  $('#portfolio-btn').click(function() {
    $('html, body').animate({
      scrollTop: $('#gallery').offset().top
    }, 800);
    return false;
  });

  // Smooth scroll to #contact
  $('#contact-btn').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 800);
    return false;
  });

  // Smooth scroll to #about_me
  $('#about-me-btn').click(function() {
    $('html, body').animate({
      scrollTop: $('#about-me').offset().top
    }, 800);
    return false;
  });

  // Smooth scroll to #scrollToTop
  $('#scrollToTop-btn').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});

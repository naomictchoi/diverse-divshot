$(document).ready(function() {
$(window).scroll(function() {
      if($(window).scrollTop() >= 750) {  
        $('.magellan-container').fadeIn('fast');
      }else{
        $('.magellan-container').fadeOut('fast');
      }
    });
});
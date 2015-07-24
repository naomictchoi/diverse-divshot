document.createElement('figure');
document.createElement('figcaption'); 

$(document).ready(function(){
  $('figcaption').css('top','600px');
  $('figure').hover(function(){
  $(this).find('figcaption').stop().animate({'top':'540px'}, 200, function(){});
},function(){
  $(this).find('figcaption').stop().animate({'top':'600px'}, 200, function(){});
});
});
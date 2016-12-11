
//
$(document).ready(function() {

	setTimeout(function(){
    $('.load-title').removeClass("load-title");
    $('#bars').hide();
    $('.title').addClass("clear");
    $('.bar').hide();
	}, 4000);

    setTimeout(function(){
      $('body').addClass('loaded');
    }, 5000);


  setTimeout(function(){
    $('.title').removeClass("clear");
  }, 5500);


});

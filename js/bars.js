
//
$(document).ready(function() {

	setTimeout(function(){
    $('.load-title').removeClass("load-title");
    $('#bars').hide();
    $('.title').addClass("black");
    $('.bar').hide();
	}, 4000);

    setTimeout(function(){
      $('body').addClass('loaded');
    }, 4500);


  setTimeout(function(){
    $(".title").removeClass("black");
  }, 5500);
});

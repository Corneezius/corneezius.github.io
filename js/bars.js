//
$(document).ready(function() {
	  $('.load-title').hide();
		$('#name').hide(0).fadeIn(1000);

	setTimeout(function(){
		$('#name').fadeOut(1000);
	}, 1500);
	//
	setTimeout(function(){
		$('.load-title').show();
		$('#credit').show();
	
		$('#bars').show();
	}, 3000);
	//
  //   setTimeout(function(){
  //     // $('body').addClass('loaded');
	// 		$('.load-title').removeClass("load-title");
	// 		$('#credit').hide();
	// 		$('#bars').hide();
	// 		// $('.title').removeClass("clear");
	// 		// $('body').removeClass("noscroll");
  //   }, 6000);
	//
	// 	  setTimeout(function(){
	// 			  $('body').addClass('loaded');
	// 				$('body').removeClass("noscroll");
	// 			}, 6400);




});


//
$(document).ready(function() {
	$('#bgvid2').hide();
	$('#bgvid3').hide();
	$('#bgvid2')[0].play();
	$('#mainNav').hide();
	$('.btn-toggle').hide();
	$('#rumble').hide(0).fadeIn(1000);
	// $('#bgvid').hide();
	setTimeout(function(){
		$('#rumble').fadeOut(1000);
	}, 1500);


	setTimeout(function(){
		$('#bgvid2').show();
	}, 2550);

	setTimeout(function(){
		$('#bgvid2').hide();
	}, 5900);


	setTimeout(function(){
		// $('#chapter').show();
		$('#started').show();
	}, 5950);

	setTimeout(function(){
		$('#mainNav').show();
		$('#chapter').hide();
		$('#started').hide();
		$('.btn-toggle').show();
		$('body').addClass('loaded');
		$('body').removeClass("noscroll");
	}, 8950);

	setTimeout(function(){
		$('#mainNav').show();
		$('.btn-toggle').show();
	}, 9000);

});


$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(500);
		$('.borboletas').hide(0).fadeIn(500);

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1500);
			$('.borboletas').fadeOut(1500);
		}, 1500);

		setTimeout(function(){
			$('#project-title').show();
			$('#artist-name').show();
			$('#bars').show();
		}, 3500);


	  setTimeout(function(){
			$('#project-title').hide();
			$('#bars').hide();
			$('#artist-name').hide();
	  }, 6000);


  setTimeout(function(){
			$('body').removeClass("noscroll");
		  $('body').addClass('loaded');
		}, 6400);
 });

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$( "#skip" ).click(function() {
	$('#project-title').hide();
	$('#bars').hide();
	$('#artist-name').hide();

setTimeout(function(){
	$('body').removeClass("noscroll");
	$('body').addClass('loaded');
}, 500);
});
// Fade in header as page scrolls down
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#header-fade').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);

      return opacity;
    }
  });

  // $('#footer-fade').css({
  //   opacity: function() {
  //     var elementHeight = $(this).height(),
  //         opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);
	//
  //     return opacity;
  //   }
  // });
});

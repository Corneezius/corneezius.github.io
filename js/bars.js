
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
  setTimeout(function(){
		$('.load-title').removeClass("load-title");
		$('#credit').hide();
		$('#bars').hide();
  }, 6000);
		//
  setTimeout(function(){
		  $('body').addClass('loaded');
			$('body').removeClass("noscroll");
		}, 6400);

});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
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

  $('#footer-fade').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);

      return opacity;
    }
  });
});

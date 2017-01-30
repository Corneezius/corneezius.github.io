$(document).ready(function(){
    $("#push").click(function(){
        $('html, body').animate({ scrollTop: 0 }, 0);
        $('#bgvid').show();
        $('.navbar-custom').css('background-color','black');
        $('header').css('background','black');
        $('#bgvid')[0].play();

        setTimeout(function(){
      		$('#bgvid').fadeOut(500);
          $('header').css('background','');
          $('.navbar-custom').css('background-color', '');
      		// $('#ninety-six').fadeOut(1000);
      	}, 55000);
    });
});

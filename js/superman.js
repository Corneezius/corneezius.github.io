/*
 _____   _           _         _                        _
|_   _| | |         | |       | |                      | |
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {
$('footer').show();
// $('#btn-menu').hide();
	setTimeout(function(){
    $( 'body' ).removeClass( '.superman' );
		$('body').addClass('loaded');
		$('.body').hide();
    $('.base').hide();
    $('.face').hide();
    $('.longfazers').hide();
		$('#btn-menu').removeAttr("style");
	}, 3000);


});

$(document).ready(function (){
	if (!sessionStorage.getItem("visited")) {
		$('#intro--overlay').fadeIn();
		//Set the key
	  sessionStorage.setItem("visited", "true");
	  $('#content').delay(100).animate({'opacity': '0'}, 1000);
	} else {
		$('#intro--overlay').hide();
		$('#content').animate({'opacity': '1'}, 500);
		$('html').css({'overflow-y': 'scroll', 'overflow': '-moz-scrollbars-vertical'});
	}
})
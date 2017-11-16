$(document).ready(function (){
	var nav = $( "#nav" );
	nav.hide();
		$('#hoverdown').hover(function(){
			$(this).find(nav).stop(true, true).delay(200).fadeIn(200);
		}, function() {
			$(this).find(nav).stop(true, true).delay(200).fadeOut(200);
		})
})
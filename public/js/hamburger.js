




$(document).ready(function (){
	var nav = $( "#nav" );
	var bg = $( "#post-nav" );
	nav.hide();
	var post = $('.wrapper--left-side.fixed.left-post');
	var color = post.css("backgroundColor");
	$( '#content' ).css('background', color);
	$('#hoverdown').hover(function(){
		$(this).find(nav).stop(true, true).delay(200).slideDown(300);
		$(this).parent(bg).css('background', none);
	}, function() {
		$(this).find(nav).stop(true, true).delay(200).slideUp(300);
		$(this).parent(bg).delay(600).queue(function (next) {
			$(this).css('background', 'color');
			next();
		});
	})
})



$(document).ready(function (){
 	var nav = $( "#nav" );
 	nav.hide();
 		$('#hoverdown').hover(function(){
 			$(this).find(nav).stop(true, true).delay(200).slideDown(200);
 		}, function() {
 			$(this).find(nav).stop(true, true).delay(0).slideUp(200);
 		})
})

// $(document).ready(function (){
// 	var nav = $( "#nav" );
// 	var bg = $( "#post-nav" );
// 	nav.hide();
// 	var post = $('.wrapper--left-side.fixed.left-post');
// 	var color = post.css("backgroundColor");
// 		$( '#content' ).css('background', color);
// 		$('#hoverdown').hover(function(){
// 			$(this).find(nav).stop(true, true).delay(200).slideDown(300);
// 			$(this).parent(bg).css('background', color);
// 		}, function() {
// 			$(this).find(nav).stop(true, true).delay(200).slideUp(300);
// 			$(this).parent(bg).delay(600).queue(function (next) {
// 				$(this).css('background', 'none');
// 				next();
// 		});
// })
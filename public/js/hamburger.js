$(document).ready(function (){
	var nav = $( "#nav" );
	var bg = $( "#post-nav" );
	var hover = $( "#hoverdown" )
	nav.hide();
	var post = $('.wrapper--left-side.fixed.left-post');
	var color = post.css("backgroundColor");
	$( '#content' ).css('background', color);

  $('#on-hover').hover(function(){
    $(this).siblings('div').find(nav).stop(true, true).delay(200).slideDown(300);
  })

  $('#on-hover').hover(function(){
    $(this).siblings('div').find(nav).stop(true, true).delay(200).slideUp(300);
  })

	// $('#on-hover').click(function(){
	// 	$(nav).stop(true, true).slideDown(300);
		// $(this).parent(bg).css('background', 'none');
	// });
	// $('#hoverdown').click(function(){
	// 	$(this).find(nav).stop(true, true).delay(200).slideUp(300);
	// })
})
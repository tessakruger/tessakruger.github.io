$(document).ready(function (){
	if (!localStorage.getItem("visited")) {
		$('#intro--overlay').show();
		//Set the key
	    localStorage.setItem("visited", "true");
	    $('#content').css('opacity', '1');
	} else {
		$('#content').css('opacity', '1');
	}
	

	//clear localStorage on tab close
	// window.onbeforeunload = function() {
	//     localStorage.removeItem("visited");
	// };
})
$(document).ready(function (){
	if (localStorage.getItem("visited")) {
		$('#intro--overlay').hide();
	} else {
		$('#intro--overlay').fadeIn();
		//Set the key
	    localStorage.setItem("visited", "true");
	}

	//clear localStorage on tab close
	// window.onbeforeunload = function() {
	//     localStorage.removeItem("visited");
	// };
})
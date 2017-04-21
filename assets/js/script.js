$(document).ready(function(){

	$(window).scroll(function () { 
		if ($(window).scrollTop() > $('body').height() / 2) {
			$('#arrow').fadeTo(500, 1);
		}	
	});

});
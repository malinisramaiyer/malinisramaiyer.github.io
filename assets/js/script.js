$(document).ready(function() {
    $('#name').fadeIn('slow');
    $('#about').fadeIn('slow');
    $('#header').fadeIn('slow');
    $("#contact-text").hover(function() {
    	$('#contact-text').text("CLICK ME!");
    });
    $('#contact-text').click(function() {
    	$(".contact-item").fadeIn('slow').delay(5000).fadeOut('fast');
    }); 
    $(".third-picture").hover(function() {
	 $('#arrow').fadeIn('slow').delay(1000).fadeOut('fast');
    });
    $("#info-module").hover(function(){
	$("#bio").addClass("bigger");
    });
});

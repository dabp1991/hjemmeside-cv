
var main = function() {

	$("body").fadeIn(1000);

	//A Method to make the thumbnail fade in when you hover over it.
 	$(".thumbnail").hover(
 		function(){
 			$(this).fadeTo("slow", 1);
 		},
 		function()
 		{
 			$(this).fadeTo("slow", 0.5);
 		});
 	

 	//A method to scroll smooth down to a given element
 	$(".smoothScroll").click(function() {
 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
 			location.hostname == this.hostname) {
 			var target = $(this.hash)
 			target = target.length ? target : $('[name='+this.hash.slice(1)+']');
 			if (target.length) {
 				$('html, body').animate({
 					scrollTop : target.offset().top
 				}, 1000);
 			return false;
 			}
 		}
 	});

 	//Fade the page out when the page changes
 	$(document).on("click", ".fadePage", function(){
 		var newUrl = $(this).attr("href");
    	
    	if (!newUrl || newUrl[0] === "#") {
        	location.hash = newUrl;
        	return;
    	}
    	$('html').fadeOut(1000, function(){
    		location = newUrl;
    	});

    	return false;
 	});

 	//Running throught the contact forms input and testing that there are inputs.
 	$('form').submit(function() {
    	var name = $('#name').val();		
	    var email = $('#email').val();
	    var mobile = $('#mobile').val();
	    var input = $('#input').val();
	    
	    if(name === "") {
	      $('.name-error').text("Please enter your name.");
	    }
	    else $('.name-error').text("");
	    
	    if (email === "") {
	      $('.email-error').text("Please enter your email address.");
	    }
	    else $('.email-error').text("");

 		if (mobile === "") {
	      $('.mobile-error').text("Please enter your mobile phone number.");
	    }
	    else if (mobile.length !== 8) {
	      $('.mobile-error').text("Please enter a valid danish phone number without +45");
	    }
	    else $('.mobile-error').text("");

	    if (input === "") {
	      $('.input-error').text("Please write a message");
	    }
	    else if(input.length >= 500) {
	    	$('.input-error').text("You message can only be 500 letters, you are now having: "+input.length+" letters");
	    }
	    else $('.input-error').text("");

	    //Testing if there are no errors.
	    if ($('.mobile-error').text() === "" && $('.name-error').text() === "" && $('.email-error').text() === "" && $('.input-error').text() === "") {
	    	$('.input-error').text("Så skal beskeden bare sendes...");	 
	    }

    return false;
  });

};

$(document).ready(main);

$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	if (scroll > 560) {
	    $(".navbar").css("background" , "#000");
	}
    else{
		  $(".navbar").css("background" , "");  	
	}
  });
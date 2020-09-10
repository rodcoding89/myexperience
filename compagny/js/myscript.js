$(document).ready(function(){
  $(".service").click(function(){
    $(".servicecontent").show(100);
	$(".modelecontent").hide(100);
	$(".contactcontent").hide(100);
	if(screen.width > 450){
		$(".service div").addClass("active");
		$(".modele div").removeClass("active");
		$(".contact div").removeClass("active");
	}
  });
  $(".modele").click(function(){
    $(".servicecontent").hide(100);
	$(".modelecontent").show(100);
	$(".contactcontent").hide(100);
	if(screen.width > 450){
		$(".modele div").addClass("active");
		$(".service div").removeClass("active");
		$(".contact div").removeClass("active");
	}
  });
  $(".contact").click(function(){
    $(".servicecontent").hide(100);
	$(".modelecontent").hide(100);
	$(".contactcontent").show(100);
	if(screen.width > 450){
		console.log(screen.width);
		$(".contact div").addClass("active");
		$(".service div").removeClass("active");
		$(".modele div").removeClass("active");
	}
  });
   $(".img").click(function(){
   	if(screen.width > 800){
   		$(".overbox").addClass("over");
   		$(".overimage").show(100);
   		$(".overimage").addClass("image-active");
   	}
   	
   });
   $(".img1").click(function(){
   	if(screen.width > 800){
   		$(".overbox").addClass("over");
   		$(".overimage1").show(100);
   		$(".overimage1").addClass("image-active");
   	}
   });
   
   $(".spanX1").click(function(){
   	$(".overimage1").hide();
   	$(".overimage1").removeClass("image-active");
   	$(".overbox").removeClass("over");
   });
   $(".spanX").click(function(){
   	$(".overimage").hide(200);
   	$(".overimage").removeClass("image-active");
   	$(".overbox").removeClass("over");
   });

    $(".rnav").click(function(){
    	if($(this).hasClass("animation")){
    		$(this).removeClass("animation");
    		$(".top").removeClass("topAnimation");
   	  		$(".middle").removeClass("middleAnimation");
   	  		$(".rigthcontent nav").removeClass("navAnime");
   	  		$(".bottom").show();
   	  		$(".rigthcontent nav").hide(200);
    	}else{
    		$(this).addClass("animation");
   	  		$(".bottom").hide();
   	  		$(".top").addClass("topAnimation");
   	  		$(".rigthcontent nav").addClass("navAnime");
   	  		$(".middle").addClass("middleAnimation");
   	  		$(".rigthcontent nav").show();
   	  		$(".service div").removeClass("active");
    	}
   	  
   });
});
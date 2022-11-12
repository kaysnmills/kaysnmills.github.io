$(document).ready(function () {

 //change size of ingredient on mouseover 	
 $("li.wafingre").mouseover(function (event) {
    $(this).css("font-size", "175%");
    $(this).css("cursor", "black");
    $(this).css("cursor", "pointer");
    
   
   
    
});

 //change size of ingredient back 	
 $("li.wafingre").mouseleave(function (event) {
    $(this).css("font-size", "100%");
    
});





  });
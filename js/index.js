$(function(){
    $(".about_menu").click( function() {
        $(".about_slide_container").css("left", "230px");
        
        $(".contact_slide_container").css("left", "-100%");
    });
    $(".contact_menu").click( function() {
        $(".about_slide_container").css("left", "-100%");
        $(".contact_slide_container").css("left", "230px");
    });
    
    $(".about_slide_container .x-sign").click(function() {
        $(".about_slide_container").css("left", "-100%");
        
    });
    $(".contact_slide_container .x-sign").click(function() {
        
        $(".contact_slide_container").css("left", "-100%");
    });
    
   
});

$(document).ready(function() {
    
});



$(document).ready(function() {
    
});







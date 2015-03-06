$(function(){
    $(".index_logo").click(function() {
        
        $(".contents").slideUp();
    });
    
    $(".work_menu").click( function() {
        $(".about_slide_container").css("left", "-100%");
        $(".contact_slide_container").css("left", "-100%");
        
        // show work contents
        $(".contents").slideDown();
    });
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

function showPortfolio(name) {
    $(".contents").slideUp();
    $(".bside_contents").slideDown();
}

function closePortfolio(name) {
    $(".contents").slideDown();
    $(".bside_contents").slideUp();
}

$(document).ready(function() {
    $(".contents").hide();
    $(".bside_contents").hide();
});







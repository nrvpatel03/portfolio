function openNav() {
    if($(window).width() <= 350){
        $("#mySidenav").css("width", "100");
    }else if($(window).width() <= 570){
        $("#mySidenav").css("width", "200");
    }else{
        $("#mySidenav").css("width", "250");
    }
    
}

function closeNav() {
    $("#mySidenav").css("width", "0");
}

$(document).ready(function(){
    //get pos of all divs/elements
    
    $(window).scroll(function(){
        const pos = $(window).scrollTop();
        if(pos>1){
        $(".navbar").css("background-color","rgb(162, 57, 202, .7)");
        }else{
        $(".navbar").css("background-color","rgb(162, 57, 202, 1)");
        }
    });
    
});



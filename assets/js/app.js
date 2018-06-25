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
// function fadeAnimationIn (posWin,eleScroll,id){
//     if(posWin === eleScroll){
//         $(id).show();
//     }
// }
// function fadeAnimationOut (posWin, eleScroll, id){
//     if(posWin > eleScroll+10){
//         $(id).removeClass("animated fadeOut");
//     }
// }
function navScroll(idNav,idScrollto){
    $(idNav).click(function(){
        $('html, body').animate({
            scrollTop: ($(idScrollto).offset().top - ($(".navbar").height() + 15))
        },500);
    })
}
$(document).ready(function(){
    //get pos of all divs/elements
    // const aboutme = $("#aboutDiv").offset().top-$("#aboutDiv").height();
    // const skills = $("#skillsDiv").offset().top;
    // const projHeadT = $("#portfolio-headText").offset().top;
    // const testProj = $("#testProj").offset().top;
    // $("#aboutDiv").hide();
    navScroll("#aboutNav","#aboutDiv");
    navScroll("#skillsNav","#skillsDiv");
    navScroll("#projectNav","#portfolio-headText");
    navScroll("#contactNav","#contact-headText");
    
    $(window).scroll(function(){
        const pos = $(window).scrollTop();
        if(pos>1){
        $(".navbar").css("background-color","rgb(162, 57, 202, .7)");
        }else{
        $(".navbar").css("background-color","rgb(162, 57, 202, 1)");
        }
        // console.log(aboutme);
        // console.log(pos);
        // fadeAnimationIn(pos,aboutme,"#aboutDiv");
    });
    
});



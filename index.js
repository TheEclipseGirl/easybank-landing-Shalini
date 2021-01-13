$(".hamburger-pop-up").hide();
$("#overlay").hide();

function toggleHamburgerClick(){
    if($("#hamburger").attr("src")==="./images/icon-hamburger.svg"){
        $("#hamburger").attr("src", "./images/icon-close.svg" )
        $(".hamburger-pop-up").slideDown();
        $("#overlay").show();
    }
    else{
        $("#hamburger").attr("src", "./images/icon-hamburger.svg" )
        $(".hamburger-pop-up").slideUp();
        $("#overlay").hide();
    }
}


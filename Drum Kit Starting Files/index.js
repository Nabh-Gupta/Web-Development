function CLICKED(){
    var ButtonHtml = this.innerHTML;
    switch (ButtonHtml) {
        case "W":
            var audio = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
    
        default:
   
            break;
    }
}


for( i = 0;i<document.querySelectorAll(".drum").length; i++){
 document.querySelectorAll("button")[i].addEventListener("click",CLICKED);{
 
 
}
}







// var audio = new Audio("sounds/tom-1.mp3");
    // audio.play(); 
function CLICKED(){
    var buttonInnerHtml = this.innerHTML;
    MakeSound(buttonInnerHtml);
    ButtonAnimation(buttonInnerHtml);
}


for( i = 0;i<document.querySelectorAll(".drum").length; i++){
 document.querySelectorAll("button")[i].addEventListener("click",CLICKED);{
}
}

 document.addEventListener("keydown",function(event) {
    MakeSound(event.key);
    ButtonAnimation(event.key);
 });


function MakeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
             var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "l":
            var audio = new Audio("sounds/kick-bass.mp3"); 
            audio.play();
            break;
        default:
          console.log(buttonInnerHtml);
            break;
     }
}


function ButtonAnimation(currentKey){
    var Ani= document.querySelector("."+ currentKey)
    Ani.classList.add("pressed");
    setTimeout(function(){
        Ani.classList.remove("pressed");

    },100);
}







  //  var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
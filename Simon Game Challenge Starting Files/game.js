var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
    }



$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
}

$(".btn").click(function() {
 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
   
    playSound(userChosenColour);
   
    animatePress(userChosenColour);
  });
   
  function animatePress(currentColor){
   
      $('#' + currentColor).addClass("pressed");
      setTimeout(function (){
          $("#"+ currentColor).removeClass("pressed")
      },100)
  };

  document.addEventListener("keydown",(event) {
    var somethi = 

  })





















// function animatePress(currentColor) {

//     // 2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//     $("#" + currentColor).addClass("pressed");
  
//     //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    
//   setTimeout(function () {
//       $("#" + currentColor).removeClass("pressed");
//     }, 100);
//   }












// function ButtonAnimation(currentKey){
//     var Ani= document.querySelector("#"+ currentKey)
//     Ani.classList.add("pressed");
//     setTimeout(function(){
//         Ani.classList.remove("pressed");
//     },1000);
// }





//   $(".btn").click(nextSequence);
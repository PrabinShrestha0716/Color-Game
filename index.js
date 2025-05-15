
var buttonColors = ["blue", "red", "green", "yellow"];
var gamePattern =[];
var random_number;
var score = 0;
var userPattern =[];
var userClick;
var randomChosenColour;


$(document).on("keypress",function nextsequence(){
 random_number = Math.floor (Math.random() * 3);

});

$(game).on("click",function nextsequence(){
 random_number = Math.floor (Math.random() * 3);

});

gamePattern.push(randomChosenColour);

$(document).on("keypress", function(){
 $("h1").text("Game started. Score: "+ score);
 gamePattern=buttonColors[random_number];
    if (gamePattern=="blue") {
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
      if (gamePattern=="red") {
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
      if (gamePattern=="green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
      if (gamePattern=="yellow") {
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }

});


 $(document).on("click", function(){
 $("h1").text("Game started. Score: "+ score);
 gamePattern=buttonColors[random_number];

   if (gamePattern=="blue") {
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
        if (gamePattern=="red") {
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
      if (gamePattern=="green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
      if (gamePattern=="yellow") {
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }

 });


$("#blue").on("click", function() {
	document.getElementById("Blue").play();
    userClick=0;
    userPattern = buttonColors[userClick];
     
});

$("#red").on("click",function(){
document.getElementById("Red").play();
userClick=1;
userPattern = buttonColors[userClick];
    
});

$("#green").on("click",function(){
document.getElementById("Green").play();
userClick=2;
userPattern = buttonColors[userClick];
});

$("#yellow").on("click",function(){
document.getElementById("Yellow").play();
userClick=3;
userPattern = buttonColors[userClick];  
});


$("#game").on("click", function scoreboard(){

    if (gamePattern==userPattern) 
        {
         $("h1").text("Game started. Score: "+ score);
            score = score+1;   
        } 

});
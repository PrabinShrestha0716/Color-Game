
var buttonColors = ["blue", "red", "green", "yellow"];

var gamePattern =[];
var userPattern =[];

var random_number;

var started = false;
var score = 0;

var userClick = 0;
var randomChosenColour;

$(document).on("keypress",function ()
{
  nextSequence();
  $("h1").text("Game Started: Score: "+ score)
});

function nextSequence()
{
  random_number = Math.floor (Math.random() * 3);
  randomChosenColour = buttonColors[random_number];
  gamePattern= randomChosenColour;

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


$(".btn").on("click", function ()
{
  $(this).animate({opacity:"50%"}).animate({opacity:"100%"});
  $("h1").fadeOut(200).fadeIn(200);
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);

 if (gamePattern==userChosenColour) 
  {
    score = score+1;
    $("h1").text("Game started. Score: "+ score); 
        nextSequence(); 
  } 
 

})

function playSound(name)
{
   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
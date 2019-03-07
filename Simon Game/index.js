//Declare variables
var starting = false;
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickPattern = [];
var lvl = 0;
//-----------------------------------------------

//Starting the game
//Press any button to:
// - change the title to lv 1
// - random box blinks
// - pressing button doesn't work anymore
$(document).keydown(function() {
  if (!starting) {
    nextSequence();
    starting = true;
  }
})


//Running the gamePattern
//-listen to the click event
//-increase level if click in correct order
//-game over if click in wrong order
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickPattern.push(userChosenColor);
  checkAnswer(userClickPattern.length - 1);
})

//-------------------------------------------------
//Check click event with random pattern
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
        userClickPattern = [];
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  $("#" + randomChosenColor).fadeOut(100).fadeIn();
  var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
  audio.play();
  gamePattern.push(randomChosenColor);
  lvl += 1;
  $("#level-title").text(`Level ${lvl}`);
}

function playSound(color) {
  var audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed").delay(100).queue(function(next) {
    $(this).removeClass("pressed");
    next();
  })
}

//Ending and restarting the game
function gameOver() {
  $("#level-title").text("Game Over, Press Any Key to Restart");
  playSound("wrong")
  userClickPattern = [];
  gamePattern = [];
  starting = false;
  lvl = 0;
  $('body').addClass("game-over").delay(300).queue(function(next) {
    $(this).removeClass("game-over");
    next();
  });
  $(document).keydown(function() {
    if (!starting) {
      nextSequence();
      starting = true;
    }
  })
}

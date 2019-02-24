// Click on all buttons

var allDrum = document.querySelectorAll(".drum");

for (let i = 0; i < allDrum.length; i++) {
  allDrum[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  //Change Description: Replace switch method with ReGex.
  //Advantages: It works well with large number of buttons.
  //Condition: The names picture files are the same as the sound files
  var keyClass = document.querySelector("." + key);
  var urlName = getComputedStyle(keyClass).backgroundImage;
  var re = /.+images|\W|png/g;
  var reGex = urlName.replace(re,"");
  var soundName = "sounds/" + reGex + ".mp3";
  var sound = new Audio(soundName);
  sound.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

  // switch (key) {
  //   case "w":
  //     var tom1 = new Audio("sounds/tom1.mp3");
  //     tom1.play();
  //     break;
  //   case "a":
  //     var tom2 = new Audio("sounds/tom2.mp3");
  //     tom2.play();
  //     break;
  //   case "s":
  //     var tom3 = new Audio("sounds/tom3.mp3");
  //     tom3.play();
  //     break;
  //   case "d":
  //     var tom4 = new Audio("sounds/tom4.mp3");
  //     tom4.play();
  //     break;
  //   case "j":
  //     var snare = new Audio("sounds/snare.mp3");
  //     snare.play();
  //     break;
  //   case "k":
  //     var crash = new Audio("sounds/crash.mp3");
  //     crash.play();
  //     break;
  //   case "l":
  //     var kick = new Audio("sounds/kick.mp3");
  //     kick.play();
  //     break;
  //   default:
  //
  // }

// Click on all buttons

var allDrum = document.querySelectorAll(".drum");

for (let i = 0; i < allDrum.length; i++) {
  allDrum[i].addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();})
};

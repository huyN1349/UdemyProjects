var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var resultDisplay = "";
var n = 0;
var numberAnimation1;
var numberAnimation2;

if (randomNumber1 > randomNumber2) {
  resultDisplay = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  resultDisplay = "Player 2 Wins!";
} else {
  resultDisplay = "Draw!";
}


var interval = setInterval(function() {
  numberAnimation1 = Math.floor(Math.random() * 6 + 1);
  numberAnimation2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img1").setAttribute("src", `images/dice${numberAnimation1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${numberAnimation2}.png`);
  n++;
  if (n == 10) {
    clearInterval(interval);
    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
    document.querySelector("h1").innerHTML = resultDisplay;
  }
}, 100)

var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var resultDisplay = "";

if (randomNumber1 > randomNumber2) {
  resultDisplay = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  resultDisplay = "Player 2 Wins!";
} else {
  resultDisplay = "Draw!";
}

document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);
document.querySelector("h1").innerHTML = resultDisplay;

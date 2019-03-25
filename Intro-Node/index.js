var superhero = require("superheroes");
var myHero = superhero.random();

var supervillain = require("supervillains");
var myVillain = supervillain.random();
console.log("Heroes' name: " + myHero);
console.log("Villain's name: " + myVillain);

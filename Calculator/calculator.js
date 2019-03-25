const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send(`Your result is ${result}`);
})

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res) {
  var bmi = Number(req.body.weight)/Math.pow(Number(req.body.height),2);
  res.send(`Your BMI is ${bmi}`);
})

app.listen(3000, function(){
  console.log("Listening to port 3000");
});

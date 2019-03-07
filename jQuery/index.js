$("h1").css("color", "red");
$("button").text("Don't Click");
$("button").html("<em>Test</em>");


$(document).keypress(function(event){
  console.log(event.key);
  $("h1").html("Hi there");
})

//Easier way to bind event
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})

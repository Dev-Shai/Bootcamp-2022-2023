$(document).ready(function() {

  // Here we are provided an initial array of letters.
  // Use this array to dynamically create buttons on the screen.
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  // 1. Create a for-loop to iterate through the letters array.
for (var i = 0; i < letters.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("letter-button letter letter-button-color");
  letterBtn.attr("data-letter", letters[i]);
  letterBtn.text(letters[i]);
  $("#buttons").append(letterBtn);
}

  // Inside the loop...

  // 2. Create a variable named "letterBtn" equal to $("<button>"); X

  // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color". X

  // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]" X

  // 5. Then give each "letterBtn" a text equal to "letters[i]". X

  // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).X

  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
  // =================================================================================

  // 7. Create an "on-click" event attached to the ".letter-button" class.
$(".letter-button").on('click', function(event) {
  var fridgeMagnet = $("<div>");
  fridgeMagnet.addClass("letter fridge-color");
  fridgeMagnet.text($(this).attr("data-letter"));
  console.log(fridgeMagnet);
  $("#display").append(fridgeMagnet);
})
  // Inside the on-click event...

  // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div. X

  // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color". X

  // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter")) X

  // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided); X

  // Be sure to test that your code works for this major task, before proceeding to the next one! X

  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // =================================================================================
$("#clear").on('click', function(event) {
  $("#display").empty();})

  // 12. Create an "on-click" event attached to the "#clear" button id.

  // Inside the on-click event...

  // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

});
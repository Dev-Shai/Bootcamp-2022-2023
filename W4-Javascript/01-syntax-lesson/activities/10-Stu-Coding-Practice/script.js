// Change the values and operators below to test your algorithm meets all conditions
var player1cost = 1456;
var player2cost = 245600;
var player3cost = 64564500;

// Write Your JavaScript Code Here

var sumofplayercosts = player1cost + player2cost + player3cost;

if (sumofplayercosts > 40000000) {
  var taxAmount = (sumofplayercosts - 40000000) * 0.18;
  console.log("The combined player cost exceeds 40,000,000.00. An additional 18% tax of " + taxAmount + " is also due");
} else {
  console.log("The total player cost is less than or equal to 40,000,000.o00, no additional tax is due");
}
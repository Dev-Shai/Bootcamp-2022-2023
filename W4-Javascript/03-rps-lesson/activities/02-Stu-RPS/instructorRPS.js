// 1. declare all necessary variables
//     - an array variable to hold all the r p or s choices as strings
//     - variables for tracking wins, losses, and ties
var choices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

// 2. setup a loop so the game can be played multiple times without refreshing the page
//     - for loop that runs 10 times per the instructions
for (var i = 0; i < 10; i++) {
  // 3. use prompt to prompt user for their input and show a message " choose r p or s"
  //     - save that in a variable to compare against the computer's input later
var userChoice = prompt("Enter r, p, or s to play!");

// make sure the user didn't click cancel
if (userChoice !== null) {
// 4. computer chooses a random r p or s
//     - use Math.random to generate a random number between 0 and the length of the array
//     - save that in a variable to compare against the player's input
var randomIndex = Math.floor(Math.random() * choices.length);
var computerChoice = choices[randomIndex];

// 5. compare inputs: we need to determine if the user wins, loses, or ties
//     - if the user picks r and computer s the user wins
//     - if user pick r and computer p then user loses
//     - *
//     - use if else statements to evaluate all these conditions

// Only run game logic if user chose a valid option, otherwise the loop will re-run
if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
    alert("The computer chose " + computerChoice);

    // 6. update the score variables (wins, losses, and ties)
    //     - if user wins, then add one the wins var
    //     - if user loses, add one to losses var
    //     - is user ties, then add one to ties
    //     - show the proper alert
    if (userChoice === computerChoice) {
    // result is a tie
    ties++;
    alert("You've tied " + ties + " time(s).");
    } else if (
    (userChoice === "r" && computerChoice === "s") ||
    (userChoice === "p" && computerChoice === "r") ||
    (userChoice === "s" && computerChoice === "p")
    ) {
    // result is a player win
    wins++;
    alert("You've won " + wins + " time(s).");
    } else {
    // result is a player lost
    losses++;
    alert("You've lost " + losses + " time(s).");
    }
} else {
    alert("invalid input, try again!")
}
} else {
// break out of the loop early if the user clicked cancel
break;
}
}
// 7. show final score when the user is done playing
// When the game is over, alert the totals to the user. We can use the \n character to make a line break.
alert(
  "Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses
);
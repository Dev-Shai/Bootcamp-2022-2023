/* Psuedocode:
- Create an Array that will be the rock paper and scissors
- Create variables that will track the round number; the wins; the tie; the loses
- Create a loop and put the round counter at the beginning of the loop. This will allow me to repeat the code if the player confirms they - want to play again
-Create and input method allowing the player to put in a string that corresponds to either the rock, paper or scissors (probably need to use if else statements to DRY)
-Create a variable for the computer choice that randomly selects rock paper or scissors by using random maths and letting the number correspond to the one of three options (probably need to use if else statements to DRY)
- Compare the player's chosen option to the computer's chosen option and based on this log a win, lose or tie
- Add 1 to the round variable at this point
- check if the round number equals to 10. If yes display the round number and win, lose and tie result in an alert and stop the game. If not ask user if they would like to play again using a prompt
- let user enter either yes or no. If yes repeat the loop/game, if no stop the loop/game

todo research math random better, research while loops better, look into functions, todos from trello board
*/

// Creating the array for the options

var rockPaperScissorChoice = ["R", "P", "S"];

// Creating the variables that will be added to:

var round = 0;
var win = 0;
var tie = 0;
var lose = 0;

// Using a do loop to be able to later add the play again option and repeat (I could do for or function? But i felt more comfortable using do)

do {

var choice = prompt("Enter your choice R (rock), P (paper), or S (scissors):");

choice = choice.toUpperCase();

var computerChoice = Math.floor(Math.random() * 3);

computerChoice = rockPaperScissorChoice[computerChoice];

alert("Computer chose " + computerChoice);

if (choice == "R" && computerChoice == "S" || 
    choice == "P" && computerChoice == "R" ||
    choice == "S" && computerChoice == "P") 
    {
alert("You win! " + choice + " beats " + computerChoice + ".");
win++;
} 

    else if (choice == computerChoice) {
    alert("It's a tie! Both players chose " + choice + ".");
    tie++;
    } 

    else {
    alert("You lose. " + computerChoice + " beats " + choice + ".");
    lose++;
    }

    round++;

if (round == 10) {
alert("This is round " + round + "." + " You have won " + win + " time(s). " + "You have tied " + tie + " time(s). " + "You have lost " + lose + " time(s).");
}
var playAgain = prompt("Play again? (yes/no)");
} 
    while (playAgain.toLowerCase() == "yes");

if (playAgain.toLowerCase() == "no") {
  alert("Thanks for playing!" + " You have won " + win + " time(s). " + "You have tied " + tie + " time(s). " + "You have lost " + lose + " time(s).")
} 

else {
  alert("That is an invalid input. " + "Thanks for playing!" + " You have won " + win + " time(s). " + "You have tied " + tie + " time(s). " + "You have lost " + lose + " time(s). " + "You can refresh to play again.");
} 

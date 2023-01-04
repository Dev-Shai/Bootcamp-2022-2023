//WRITE YOUR CODE BELOW
// WRITE YOUR CODE HERE

let STUDENT_NAME = ["Ahmed", "Ollie","Carl", "Diego", "Elsa", "Freya", "Hannah", "Godiva"];

//using a for loop to individually greet each classmate in the student array
for (let i = 0; i < STUDENT_NAME.length; i++) { 
    console.log("Great to see you " + STUDENT_NAME[i] + "!");
}

console.log("\n")

//doing a list backwards using a for loop

console.log("\n")


for (let i =  STUDENT_NAME.length - 1; i >= 0; i--) {
  console.log(STUDENT_NAME[i]);
}

console.log("\n")
//doing a list backwards using a do loop

let i = STUDENT_NAME.length - 1;

do {
  console.log(STUDENT_NAME[i]);
  i--;
} while (i >= 0);
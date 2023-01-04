// WRITE YOUR CODE HERE

let STUDENT_NAME = ["Ahmed", "Ollie","Carl", "Diego", "Elsa", "Freya", "Hannah", "Godiva"];

//using the array length property to determine the number of elements (or names) in the array and printing this
console.log("The number of students in the class is currently: " + STUDENT_NAME.length);

//Displaying the names of all students catenated with text
console.log("Welcome to the class " + STUDENT_NAME + ".")


// add others
for (let i = 0; i < STUDENT_NAME.length; i++) { 
    console.log("Welcome to the class " + STUDENT_NAME[i] + ".");
}
//replacing the first student with a new one
STUDENT_NAME[0] === "Anna";

// logging in console to check if the first student has been replaced using the index 
if (STUDENT_NAME[0] = "Anna") console.log(STUDENT_NAME[0] + " is in the class");

console.log(STUDENT_NAME)
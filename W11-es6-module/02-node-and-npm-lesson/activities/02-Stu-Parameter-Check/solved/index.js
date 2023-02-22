// * It's done when I use `process.argv` to assign two arguments to variables.

const a = process.argv[2];
const b = process.argv[3];

// * It's done when I compare those two variables to see whether they are the same or not.

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}



// * It's done if the program returns `true` when the values are the same and `false` if they are not. 

// const a = process.argv[2];
// const b = process.argv[3];

// // Using a conditional statement
// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Using a ternary operator
// console.log(a === b ? true : false)

// // Comparing variables
// console.log(a === b);

// // Comparing argument values directly
// console.log(process.argv[2] === process.argv[3]);

// process.argv is called this because it is an array of arguments that are passed to the process when it is started. The first two elements of the array are the path to the node executable and the path to the file being executed. The remaining elements are any additional arguments passed to the process. For example, if you were to run the following command in your terminal:
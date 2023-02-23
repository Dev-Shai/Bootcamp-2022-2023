// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? the operator is spread operator because it is copying the songs array into another array. it is not a rest operator because it is not taking in an indefinite number of arguments. An example of a rest operator is the additionSpread function below.

const newSongs = [...songs];
// TODO: What do you expect to be logged in the console? I expect to see the songs array copied into a newSongs array.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
  // the reduce method is taking in the array and adding the values together. The spread operator is taking in an indefinite number of arguments and putting them into an array.
//   const is a keyword used to declare a constant variable. In this case, the constant variable is named additionSpread.

// (...array) is a rest parameter syntax that allows the function to accept any number of arguments and store them in an array called array. The spread operator ... before array means that any number of arguments can be passed into the function and they will be collected into an array.

// => is an arrow function syntax. It's a shorthand syntax for defining a function.

// return array.reduce((a, b) => a + b, 0) is the implementation of the function. reduce() is a method used to reduce an array to a single value by performing a callback function on each element of the array. In this case, the callback function is (a, b) => a + b, which adds up the two elements a and b and returns their sum. The 0 at the end is the initial value of the accumulator a.

// The final result of the reduce() method is the sum of all the elements in the array.

// So, the function additionSpread takes any number of arguments, puts them into an array called array, and then adds up all the elements in the array to return their sum.
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));

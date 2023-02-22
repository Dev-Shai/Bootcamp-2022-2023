// All of the `createGreeting` functions are equivalent
// var createGreeting = function(message, name) {
//   return message + ", " + name + "!";
// };

// the above is function expression with two parameters

// We can safely swap out function expressions with arrow functions most of the time because arrow functions are anonymous functions
//  - they do not have a name
// - they are not hoisted
// - they are not stored in the variable that they are assigned to
// - they are not stored in the object or scope

// var createGreeting = (message, name) => {
//   message + ", " + name + "!";
// };

// we use the return expression because we are using curly braces to define the function body and we want to return the value of the expression to the caller   - we are not using the return keyword because we are using the arrow function syntax and the arrow function syntax automatically returns the value of the expression to the caller

// // If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// // If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);

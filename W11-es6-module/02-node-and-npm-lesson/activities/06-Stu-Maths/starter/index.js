// TODO: Import `maths.js`
const maths = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
operation = process.argv[3];
const numOne = parseInt(process.argv[2]);
const numTwo = parseInt(process.argv[4]);
// const numOne = parseInt(process.argv[3]);
// const numTwo = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
    case 'plus':
        console.log(maths.sum(numOne, numTwo));
        break;
    case 'minus':
        console.log(maths.difference(numOne, numTwo));
        break;
    case 'multiply':
        console.log(maths.product(numOne, numTwo));
        break;
    case 'divide':
        console.log(maths.quotient(numOne, numTwo));
        break;
    default:
        console.log('Not a valid operation!');
        break;
}


// a switch statement is a type of conditional statement that allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.

// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

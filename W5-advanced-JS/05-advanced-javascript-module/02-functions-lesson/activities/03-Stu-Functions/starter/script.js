// Write Your Code Below
// created a function declaration to add two numbers, 1 and 2
function addTwoNum(num, numAdd) {
    let res = num + numAdd;
    return res;
}

let myAddition = addTwoNum(1, 2)

console.log(`The addition of both numbers = ${myAddition}`);

// create a function expression to subtract 10 from 20
const SubtractingNum = function(addnum, minusnum) {
return addnum - minusnum;
};

console.log(`The subtraction of both numbers = ${SubtractingNum(20, 10)}`);

//One function that calculates the area of a square using an outside variable, using either function declaration or expression. 

const squareCalc = function(sideOne, sideTwo) {
    return sideOne * sideTwo;
    };
    
    console.log(`The calculated area of the square is ${squareCalc(20, 10)}`);
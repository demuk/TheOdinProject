// Final result should be 10.42
// Add/update your code here

// const { number } = require("mathjs");

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

// Write a calculation that multiplies result and result2 together and assigns the result back to result. 
//This will require assignment shorthand.



result = result * result2;

// Write a line of code that takes result and formats it to 2 decimal places, 
// storing the result of this in a variable called finalResult.

finalResult = result.toFixed(2)


// Check the data type of finalResult using typeof; 
// you'll probably see that it is actually of string type! 
// Write a line of code that converts it to a number type, 
// storing the result in a variable called finalNumber.

console.log(typeof(finalResult));

finalNumber = finalResult;

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
let para2 = document.createElement('p');
let finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);
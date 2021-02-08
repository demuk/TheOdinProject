let finalResult;
let evenOddResult;

// Create four variables that contain numbers. Call the variables something sensible
let lightYearsToPluto = 5;
let lightYearsToJupiter = 3;
let lightYearsToSaturn = 6;
let lightYearsToNeptune = 12;

// Add the first two variables together and store the result in another variable.
let plutoAndJupiter = lightYearsToJupiter + lightYearsToPluto;

// Subtract the fourth variable from the third and store the result in another variable.

let neptuneSaturn = lightYearsToNeptune - lightYearsToSaturn;

// Multiply the results from the last two steps together, 
//storing the result in a variable called finalResult. The product should be 48. 
//If it isn't, you'll have to adjust some of the initial input values.

finalResult = plutoAndJupiter * neptuneSaturn

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
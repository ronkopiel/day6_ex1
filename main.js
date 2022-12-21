// Write a function that takes in a number and returns true if the number is even, and false if the number is odd.
function isEven(number) {
    if (number%2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(6));

// Write a function named greaterNum that:
// takes 3 arguments, all numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 , 15 , 10 is 15.").

function greaterNum(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if(y > x && y > z) {
        return y;
    }
    else if (z > x && z > y) {
        return z;
    }
    else {
        return 'non-existent';
    }
}

console.log(`The greater number of 5, 10, 15 is ${greaterNum(5, 10, 15)}`);
console.log(`The greater number of 5, 10, 10 is ${greaterNum(5, 10, 10)}`);

//Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
    if (langCode === 'he') {
        return 'שלום עולם';
    }
    else if (langCode === 'ru') {
        return 'Привет, мир';
    }
    else if (langCode === 'jp') {
        return 'こんにちは世界';
    }
    else {
        return 'Hello World'
    }
}
console.log(helloWorld('he'));
console.log(helloWorld('ru'));
console.log(helloWorld('jp'));
console.log(helloWorld('fr'));

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// (A for: 90-100, B for: 80-89, C for: 70-79, D for: 60-69, F for 59 or lower)  
// Call that function for a few different scores and make sure it works.
// Write the function in 2 different ways
function assiginGrade(grade) {
    if(grade >= 90 && grade <= 100) {
        return 'A';
    }
    else if(grade >= 80 && grade <= 89) {
        return 'B';
    }
    else if(grade >= 70 && grade <= 79) {
        return 'C';
    }
    else if(grade >= 60 && grade <= 69) {
        return 'D';
    }
    else if(grade <= 59) {
        return 'F';
    }
    else {
        return 'showoff';
    }
}
console.log(`Your grade is: ${assiginGrade(89)}`);
console.log(`Your grade is: ${assiginGrade(90)}`);
console.log(`Your grade is: ${assiginGrade(58)}`);
console.log(`Your grade is: ${assiginGrade(129)}`);
console.log(`Your grade is: ${assiginGrade(-42)}`);

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, count) {
    if(count === 1) {
        return `${count} ${noun}`;
    }
    else if (noun === 'goose') {
        return `${count} geese`;
    }
    else if (noun === 'octopus') {
        return `${count} octopy`;
    }
    else if (noun === 'fish') {
        return `${count} fish`;
    }
    else {
        return `${count} ${noun}s`;
    }
}
console.log(`You have: ${pluralize('fish', 3)}`);
console.log(`You have: ${pluralize('goose', 5)}`);
console.log(`You have: ${pluralize('car', 1)}`);
console.log(`You have: ${pluralize('octopus', 1)}`);
console.log(`You have: ${pluralize('apartment', 2)}`);


// Using logical operators, write an expression that represents the following statement: "I would like an ice cream with strawberry and chocolate, or stracciatella, or an ice cream of any flavor but caramel." 
// Flavors: strawberry, chocolate, stracciatella, caramel.
//     (the expression will look like: a && b || c || b &&d …)
//      Put the expression in a comment as it’s not valid code
// ( flavor == strawberries && flavor2 == choclate || flavor == stracciatella || flavor != caramel)

// Write a function that uses “prompt” asking the user to write their name, use “document.write” to print “Hello, __(name)__, Welcome!”, if there is no name inputted print the text “Hello friend, Welcome!”. Try to do this exercise in two different ways.

function printPromptInput() {
    let userName = prompt(`please enter your name`,`friend`);
    document.write(`Hello ${userName}, Welcome! `);
}
printPromptInput();

// Write a function that takes in a number and prints a message based on the following conditions: 
// If the number is positive and odd, print "Positive and odd"If the number is positive and even, print "Positive and even"
//  If the number is negative and odd, print "Negative and odd"
// If the number is negative and even, print "Negative and even"
//  If the number is zero, print "Zero"
function numberDefenition(toBeDefined) {
    if(toBeDefined === 0) {
        document.write('Zero ');
    }
    else if(toBeDefined > 0 && toBeDefined%2 === 0) {
        document.write('Positive and even ');
    }
    else if(toBeDefined > 0 && toBeDefined%2 != 0) {
        document.write('Positive and odd ');
    }
    else if(toBeDefined < 0 && toBeDefined%2 === 0) {
        document.write('Negetive and even ');
    }
    else {
        document.write('Negetive and odd '); 
    }
}
numberDefenition(4);
numberDefenition(-3);
numberDefenition(0);
numberDefenition(-8);
numberDefenition(5);


//Write a function that takes in a number and returns true if the number is prime (a number that is divisible only by itself and 1), and false if it is not.
function isPrime(num) {

}

// Write a function `calculator()` thats get 3 arguments : num1,num2,operand (“+”,”-”,”/”,”%”,”*”) and return the answer of the equation. 
// for example:
// console.log(calculator(2, 3, "+")); // Output: 5
// console.log(calculator(2, 3, "-")); // Output: -1
// console.log(calculator(2, 3, "/")); // Output: 0.6666666666666666
// console.log(calculator(2, 0, "/")); // Output: "Cannot divide by zero"
// console.log(calculator(2, 3, "^")); // Output: "Invalid operator"
function calculator(num1, num2, operand) {
    if (operand === '+') {
        return num1 + num2;
    }
    else if (operand === '-') {
        return num1 - num2;
    }
    else if (operand === '*') {
        return num1*num2;
    }
    else if (operand === '/') {
        if (num2 != 0){
            return num1/num2;
        }
        else {
            return `cannot divide by zero`;
        }
    }
    else if (operand === '%') {
        return num1%num2;
    }
    else {
        return `invalid operator`;
    }
}

console.log(calculator (2, 3, '*'));
console.log(calculator (2, 3, '+'));
console.log(calculator (2, 3, '-'));
console.log(calculator (2, 3, '/'));
console.log(calculator (2, 0, '/'));
console.log(calculator (2, 3, '^'));
console.log(calculator (2, 3, '%'));

// Write a JavaScript function called isLeapYear that takes a number representing a year and returns a boolean value indicating whether or not the year is a leap year. A leap year is a year that is divisible by 4, but not divisible by 100 unless it is also divisible by 400.
// For example, the year 2000 is a leap year because it is divisible by 4 and by 400, but the year 1900 is not a leap year because it is divisible by 4 and by 100, but not by 400. Try to not use “else” statement.

function isLeapYear(year) {
    if(year%4 === 0) {
        if(year%100 === 0) {
            if(year%400 === 0) {
                return true;
            }
            return false
        }
        return true;
    }
    return false;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2008));
console.log(isLeapYear(20));

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
function sortNum(x, y, z) {
    if (x >= y && x >= z) {
        if(y > z){
            alert(`${x}, ${y}, ${z}`);
        }
        else {
            alert(`${x}, ${z}, ${y}`);
        }
    }
    else if(y > x && y > z) {
        if(x > z){
            alert(`${y}, ${x}, ${z}`);
        }
        else {
            alert(`${y}, ${z}, ${x}`);
        }
    }
    else if (z > x && z > y) {
        if(x > y){
            alert(`${z}, ${x}, ${y}`);
        }
        else {
            alert(`${z}, ${y}, ${x}`);
        }
    }
    else {
        alert(`${z}, ${y}, ${x}`);
    }
}
sortNum(1,1,3)
sortNum(3,2,1)
sortNum(1,2,3)
sortNum(1,2,2)
sortNum(1,1,1)

function crewStatus(spaceSuitsOn = Boolean, shuttleCabinReady = Boolean) {
    if (spaceSuitsOn && shuttleCabinReady){
        console.log(`Crew Ready`);
    }
    else {
        console.log(`Crew Not Ready`);
    }
}

function computerStatus(computerStatusCode) {
    if (computerStatusCode === 200)  {
        console.log(`Please stand by. Computer is reebooting.`);
    }
    else if (computerStatusCode === 400) {
        console.log(`Success! Computer online.`);
    }
    else {
        console.log(`ALERT: Computer offline!`);
    }
}
function speed(shuttleSpeed) {
    if (shuttleSpeed > 17500) {
        console.log("ALERT: Escape velocity reached!");
    }
    else if (shuttleSpeed < 8000) {
        console.log("ALERT: Cannot maintain orbit!");
    }
    else {
        console.log("Stable speed");
    }
}

crewStatus (true, false);
crewStatus (false, true);
crewStatus (true, true);
crewStatus (false, false);
computerStatus(200);
computerStatus(400);
computerStatus(404);
speed(220000);
speed(10000);
speed(300);

// USE SWITCH CASE  (for Tuesday) - Write a function that takes in a string and prints a message based on the following conditions
// If the string is "red", print "Red is the color of danger"
// If the string is "orange", print "Orange is the color of caution"
// If the string is "yellow", print "Yellow is the color of sunshine"
//  If the string is "green", print "Green is the color of nature"
//  If the string is "blue", print "Blue is the color of the sky"
// If the string is "purple", print "Purple is the color of royalty"
// If the string is none of the above, print "Invalid color"

function describeColor(color) {
    switch (color) {
        case "red":
            console.log('Red is the color of danger');
            break;
        case "orange":
            console.log('Orange is the color of caution');
            break;
        case "yellow":
            console.log('Yellow is the color of sunshine');
            break;
        case "green":
            console.log('Green is the color of nature');
            break;
        case "blue":
            console.log('Blue is the color of the sky');
            break;
        case "purple":
            console.log('purple is the color of royalty');
            break;
        default:
            console.log('invalid color');
        break;
    }
}

describeColor('red');
describeColor('orange');
describeColor('yellow');
describeColor('green');
describeColor('blue');
describeColor('purple');
describeColor('black');
describeColor('white');
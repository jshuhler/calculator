// declaring Variables
let initialNum = []; //first number typed in 
let secondNum = []; //second number typed in
let initialString;
let secondString;
let operatorSelect;
let operatorSymbol;
const equalBtn = document.getElementById("equal-btn"); //the equal button to run the functions
const operatorBtn = document.querySelectorAll(".operator-btn"); //the operator button selected
const numBtns = document.querySelectorAll(".number-btn"); //numbers and decimal buttons
const topDisplay = document.querySelector(".top-display"); //the top screen with smaller text
const mainDisplay = document.querySelector(".main-display"); //container for the main screen

// basic operations
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

// do the actual math
equalBtn.addEventListener('click', (event) => {
    if (operatorSymbol === "/") {
        mainDisplay.textContent = divide(initialString,secondString);
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    } else if (operatorSymbol === "*") {
        mainDisplay.textContent = multiply(initialString,secondString);
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    } else if (operatorSymbol === "-") {
        mainDisplay.textContent = subtract(initialString,secondString);
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    } else if (operatorSymbol === "+") {
        mainDisplay.textContent = add(initialString,secondString);
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    }
});

// typing the numbers
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        if (operatorSymbol === undefined) {
            initialNum.push(event.target.textContent)
            initialString = initialNum.join("");
            mainDisplay.textContent = initialString;
        } else if (operatorSymbol !== undefined) {
            secondNum.push(event.target.textContent)
            secondString = secondNum.join("");
            mainDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
        }
    });
});

// selecting operator button
operatorBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.id === "div-btn") {
            operatorSelect = "divide";
            operatorSymbol = "/";
        } else if (event.target.id === "mult-btn") {
            operatorSelect = "multiply";
            operatorSymbol = "*";
        } else if (event.target.id === "sub-btn") {
            operatorSelect = "subtract";
            operatorSymbol = "-";
        } else if (event.target.id === "add-btn") {
            operatorSelect = "add";
            operatorSymbol = "+";
        }
        mainDisplay.textContent = `${initialString} ${operatorSymbol}`
    });
});




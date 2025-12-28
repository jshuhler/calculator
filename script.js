// declaring Variables
let initialNum = []; //first number typed in 
let secondNum = []; //second number typed in
let initialString;
let secondString;
let operatorSelect;
let operatorSymbol;
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

// operate function
const operate = function (initialNum, secondNum, operatorSelect) {
     
}

// typing the first number
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        initialNum.push(event.target.textContent)
        initialString = initialNum.join("");
        mainDisplay.textContent = initialString;  
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

// typing the second number
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        secondNum.push(event.target.textContent)
        secondString = secondNum.join("");
        mainDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    });
});


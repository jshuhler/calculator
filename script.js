// declaring Variables
let initialNum = []; //first number typed in 
let secondNum = []; //second number typed in
let initialString = 0;
let secondString;
let answer;
let operatorSelect;
let operatorSymbol;
const equalBtn = document.getElementById("equal-btn"); //the equal button to run the functions
const clearBtn = document.getElementById("clear-btn")
const operatorBtn = document.querySelectorAll(".operator-btn"); //the operator button selected
const numBtns = document.querySelectorAll(".number-btn"); //numbers and decimal buttons
const topDisplay = document.querySelector(".top-display"); //the top screen with smaller text
const mainDisplay = document.querySelector(".main-display"); //container for the main screen

// basic operations - could add toFixed(5) on here if I want to format the output
const add = function (a, b) {
    answer = (Number(a) + Number(b))
    return answer;
};

const subtract = function (a, b) {
    answer = (Number(a) - Number(b));
    return answer;
};

const multiply = function (a, b) {
    answer = (a * b);
    return answer;
};

const divide = function (a, b) {
    answer = (a / b);
    return answer;
};

// typing the numbers
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        if (operatorSymbol === undefined) {
            initialNum.push(event.target.textContent);
            initialString = initialNum.join("");
            mainDisplay.textContent = initialString;
        } else if (operatorSymbol !== undefined) {
            secondNum.push(event.target.textContent);
            secondString = secondNum.join("");
            mainDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
        }; 
    });
});

// selecting operator button
operatorBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        if (initialString !== undefined && secondString !== undefined && operatorSymbol !== undefined && answer === undefined) {
            // subsequentOperator = event.target.id;
            operation(initialString, secondString, operatorSymbol);
            initialString = answer;
            initialNum = [];
            secondNum = [];
            secondString = undefined;
            operatorSelect = undefined
            operatorSymbol = undefined;
            answer = undefined;
        } else if (answer !== undefined) {
            operation(initialString, secondString, operatorSymbol);
        };
        if (event.target.id === "div-btn") {
            // operatorSelect = "divide";
            operatorSymbol = "/";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "mult-btn") {
            // operatorSelect = "multiply";
            operatorSymbol = "*";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "sub-btn") {
            // operatorSelect = "subtract";
            operatorSymbol = "-";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "add-btn") {
            // operatorSelect = "add";
            operatorSymbol = "+";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        };
    });
});

// do the actual math
// equalBtn.addEventListener('click', () => {
    function operation (initialString, secondString, operatorSymbol) {
        if (operatorSymbol === "/") {
            mainDisplay.textContent = divide(initialString,secondString).toFixed(5);
            topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
        } else if (operatorSymbol === "*") {
            mainDisplay.textContent = multiply(initialString,secondString).toFixed(5);
            topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
        } else if (operatorSymbol === "-") {
            mainDisplay.textContent = subtract(initialString,secondString).toFixed(5);
            topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
        } else if (operatorSymbol === "+") {
            mainDisplay.textContent = add(initialString,secondString).toFixed(5);
            topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
        }
    }
// });

// clear button
clearBtn.addEventListener('click', () => {
    topDisplay.textContent = "--";
    mainDisplay.textContent = "0000";
    initialString = 0;
    secondString = undefined;
    operatorSymbol = undefined;
    operatorSelect = undefined;
    initialNum = [];
    secondNum = [];
});
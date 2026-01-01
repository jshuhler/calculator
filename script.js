// variables
let initialNum = []; //first number typed in 
let secondNum = []; //second number typed in
let initialString = 0;
let secondString;
let answer;
let operatorSymbol;
const equalBtn = document.getElementById("equal-btn"); //the equal button to run the functions
const clearBtn = document.getElementById("clear-btn");
const deleteBtn = document.getElementById("delete-btn");
const decimalBtn = document.getElementById("decimal-btn"); //for single decimals per number
const operatorBtn = document.querySelectorAll(".operator-btn"); //the operator button selected
const numBtns = document.querySelectorAll(".number-btn"); //numbers and decimal buttons
const topDisplay = document.querySelector(".top-display"); //the top screen with smaller text
const mainDisplay = document.querySelector(".main-display"); //container for the main screen

// basic operations
const add = function (a, b) {
    answer = (Number(a) + Number(b))
    return answer;
};

const subtract = function (a, b) {
    answer = (a - b);
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

// only allowing a single decimal per number
decimalBtn.addEventListener('click', (event) => {
    if (operatorSymbol === undefined && initialNum.includes(".") === false) {
        initialNum.push(event.target.textContent);
        initialString = initialNum.join("");
        mainDisplay.textContent = initialString;
    } else if (operatorSymbol !== undefined && secondNum.includes(".") === false) {
        secondNum.push(event.target.textContent);
        secondString = secondNum.join("");
        mainDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    };
});

// selecting operator button
operatorBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        if (initialString !== undefined && secondString !== undefined && operatorSymbol !== undefined && answer === undefined) {
            operation(initialString, secondString, operatorSymbol);
            initialString = parseFloat(answer.toFixed(5));
            initialNum = [];
            secondNum = [];
            secondString = undefined;
            operatorSymbol = undefined;
            answer = undefined;
        } else if (answer !== undefined) {
            operation(initialString, secondString, operatorSymbol);
        };
        if (event.target.id === "div-btn") {
            operatorSymbol = "/";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "mult-btn") {
            operatorSymbol = "*";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "sub-btn") {
            operatorSymbol = "-";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        } else if (event.target.id === "add-btn") {
            operatorSymbol = "+";
            mainDisplay.textContent = `${initialString} ${operatorSymbol}`
        };
    });
});

// do the actual math
function operation (initialString, secondString, operatorSymbol) {
    if (operatorSymbol === "/" && secondString === "0") {
        answer = 0;
        mainDisplay.textContent = `Try again.`;
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
    } else if (operatorSymbol === "/" && secondString !== "0") {
        mainDisplay.textContent = parseFloat(divide(initialString,secondString).toFixed(5));
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
    } else if (operatorSymbol === "*") {
        mainDisplay.textContent = parseFloat(multiply(initialString,secondString).toFixed(5));
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
    } else if (operatorSymbol === "-") {
        mainDisplay.textContent = parseFloat(subtract(initialString,secondString).toFixed(5));
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
    } else if (operatorSymbol === "+") {
        mainDisplay.textContent = parseFloat(add(initialString,secondString).toFixed(5));
        topDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString} =`;
    }
}

// clear button
clearBtn.addEventListener('click', () => {
    topDisplay.textContent = "--";
    mainDisplay.textContent = "0000";
    initialString = 0;
    secondString = undefined;
    operatorSymbol = undefined;
    initialNum = [];
    secondNum = [];
    answer = undefined;
});

// delete button
deleteBtn.addEventListener('click', () => {
    if (operatorSymbol === undefined) {
        initialNum.pop();
        initialString = initialNum.join("");
        mainDisplay.textContent = initialString;
    } else if (operatorSymbol !== undefined) {
        secondNum.pop();
        secondString = secondNum.join("");
        mainDisplay.textContent = `${initialString} ${operatorSymbol} ${secondString}`;
    };
});



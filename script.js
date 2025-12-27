// declaring Variables
let initialNum = []; //first number typed in 
let secondNum = []; //second number typed in
const operatorBtn = document.querySelectorAll(".operator-btn"); //the operator button selected
const mainDisplay = document.querySelector(".main-display"); //container for the screen
const numBtns = document.querySelectorAll(".number-btn"); //numbers and decimal buttons

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
const operate = function (initialNum, secondNum, operator) {
     
}

// typing the first number
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        initialNum.push(event.target.textContent)
        let initialString = initialNum.join("");
        mainDisplay.textContent = initialString;  
    });
});

// typing the second number
numBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        secondNum.push(event.target.textContent)
        let secondString = secondNum.join("");
        mainDisplay.textContent = secondString;  
    });
});

// selecting operator button
// operatorBtn.forEach(button => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.id)
//         let operatorBtn = event.target.id;
//         if {operatorBtn === "div-btn"} {
//             let 
//         }
//     })
// })
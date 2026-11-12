const display = document.querySelector('.display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

const operatorButtons = document.querySelectorAll('.operator');

let operator = '';
let currentNumber = '';
let previousNumber = '';

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'x') {
            operator = '*';
            previousNumber = currentNumber;
            previousOperand.textContent = previousNumber;
            currentNumber = '';
            currentOperand.textContent = currentNumber;
            console.log("Multiply")
        } else if (button.textContent === '÷') {
            operator = '/';
            previousNumber = currentNumber;
            previousOperand.textContent = previousNumber;
            currentNumber = '';
            currentOperand.textContent = currentNumber;
            console.log("Divide")
        } else if (button.textContent === "+") {
            operator = button.textContent;
            previousNumber = currentNumber;
            previousOperand.textContent = previousNumber;
            currentNumber = '';
            currentOperand.textContent = currentNumber;
            console.log("Add")
        } else if (button.textContent === "-") {
            operator = button.textContent;
            previousNumber = currentNumber;
            previousOperand.textContent = previousNumber;
            currentNumber = '';
            currentOperand.textContent = currentNumber;
            console.log("Subtract")
        }
    });
});

const numberButtons = document.querySelectorAll('.number');
const equalButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        currentOperand.textContent = currentNumber;
        console.log(button.textContent);
    });
});

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};


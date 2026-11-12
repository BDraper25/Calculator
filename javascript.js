const display = document.querySelector('.display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

const operatorButtons = document.querySelectorAll('.operator');

let operator = '';
let currentNumber = '';
let previousNumber = '';

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

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'x') {
            operator = '*';
            console.log("Multiply")
        } else if (button.textContent === '÷') {
            operator = '/';
            console.log("Divide")
        } else if (button.textContent === "+") {
            operator = button.textContent;
            console.log("Add")
        } else if (button.textContent === "-") {
            operator = button.textContent;
            console.log("Subtract")
        };
        previousNumber = currentNumber;
        previousOperand.textContent = `${previousNumber} ${operator}`;
        currentNumber = '';
        currentOperand.textContent = currentNumber;
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


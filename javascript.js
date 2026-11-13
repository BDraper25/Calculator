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
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        currentOperand.textContent = currentNumber;
        console.log(button.textContent);
    });
});

decimalButton.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        currentOperand.textContent = currentNumber;
    };
});

deleteButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);

    if (currentNumber === '') {
        currentOperand.textContent = '0';
    } else {
        currentOperand.textContent = currentNumber;
    }
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== '' && currentNumber !== '') {
            let result = calculation();

            if (result === null) {
                currentOperand.textContent = 'Cannot divide by zero';
                currentNumber = '';
                previousNumber = '';
                operator = '';
                previousOperand.textContent = '';
                return;
            };

            previousNumber = String(result);
        } else {
            previousNumber = currentNumber;
        }
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
        previousOperand.textContent = `${previousNumber} ${operator}`;
        currentNumber = '';
        currentOperand.textContent = currentNumber;
    });
});

equalButton.addEventListener('click', () => {
    let result = calculation();
    currentNumber = String(result);
    currentOperand.textContent = currentNumber;
    previousOperand.textContent = '';
    operator = '';
});

clearButton.addEventListener('click', () => {
    operator = '';
    currentNumber = '';
    previousNumber = '';
    previousOperand.textContent = '';
    currentOperand.textContent = '0';
});

const calculation = function() {
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);
    if (operator === '/' && currentNumber === 0) {
        return null;
    };
    let result;
    
    if (operator === '*') {
        result = multiply(previousNumber, currentNumber);
    } else if (operator === '/') {
        result = divide(previousNumber, currentNumber);
    } else if (operator === '+') {
        result = add(previousNumber, currentNumber);
    } else if (operator === '-') {
        result = subtract(previousNumber, currentNumber);
    };
    return result;
};
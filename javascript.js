const display = document.querySelector('.display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'x') {
            console.log("Multiply")
        } else if (button.textContent === '÷') {
            console.log("Divide")
        } else if (button.textContent === "+") {
            console.log("Add")
        } else if (button.textContent === "-") {
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
        console.log(button.textContent);
    });
});

let operator = '';



const display = document.querySelector('.display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    });
});

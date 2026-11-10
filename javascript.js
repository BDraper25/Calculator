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
        console.log(button.textContent)
    });
});



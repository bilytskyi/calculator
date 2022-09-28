function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function populate() {
    let arr = [];
    let operator = "";
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.getAttribute('type') == "number") {
                if (display.textContent == "0") {
                    display.textContent = button.getAttribute('value');
                }
                else {
                    display.textContent += button.getAttribute('value');
                }
            }
            if (button.getAttribute('type') == "clear") {
                display.textContent = "0";
            }
            if (button.getAttribute('type') == "operator") {
                arr.push(display.textContent);
                operator = button.getAttribute('value');
                display.textContent = "0";
            }
            if (button.getAttribute('value') == "=") {
                arr.push(display.textContent);
                let b = parseInt(arr.slice(-1));
                let a = parseInt(arr.slice(-2, -1));
                display.textContent = operate(operator, a, b);
            }
        });
    });
}

populate();
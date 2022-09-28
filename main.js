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
    let a = 0;
    let b = 0;
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.getAttribute('type') == "number") {
                if (display.textContent == "0" || operator != "") {
                    display.textContent = button.getAttribute('value');
                }
                else {
                    display.textContent += button.getAttribute('value');
                }
            }
            if (button.getAttribute('type') == "clear") {
                display.textContent = "0";
                arr = [];
            }
            if (button.getAttribute('type') == "operator") {
                if (arr.length == 0) {
                    a = display.textContent;
                    arr.push(a);
                    operator = button.getAttribute('value');
                    display.textContent = "0";
                }
                else {
                    b = display.textContent;
                    arr.push(b);
                    b = parseInt(arr.slice(-1));
                    a = parseInt(arr.slice(-2, -1));
                    display.textContent = operate(operator, a, b);
                    arr.push(operate(operator, a, b));
                    operator = button.getAttribute('value');
                }
            }
            if (button.getAttribute('value') == "=") {
                arr.push(display.textContent);
                b = parseInt(arr.slice(-1));
                a = parseInt(arr.slice(-2, -1));
                display.textContent = operate(operator, a, b);
            }
        });
    });
}

populate();
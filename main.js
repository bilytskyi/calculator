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

function operate(allParts, allResults) {
    if (allParts.length == 2) {

        let result = parseInt(allParts.slice(-1)) + parseInt(allParts.slice(-2, -1));
        allResults.push(result);

        display.textContent = result;
        flag = "on";
    }
    if (allParts.length > 2) {
        let result = parseInt(allParts.slice(-1)) + allResults.slice(-1);
        allResults.push(result);

        display.textContent = result;
        flag = "on";
    }
    else {
        display.textContent = "0";
    }
}

function populate() {

}

let allParts = [];
let allResults = [];
let curr = "0";
let flag = "on";


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.getAttribute('type') == "number") {
            if (display.textContent == "0" || flag == "on") {
                display.textContent = button.getAttribute('value');
                curr = button.getAttribute('value');
                flag = "off";
            }
            else {
                display.textContent += button.getAttribute('value');
                curr += button.getAttribute('value');
            }
        }
        if (button.getAttribute('type') == "clear") {
            display.textContent = "0";
            curr = "0";
        }
        if (button.getAttribute('type') == "operator") {
            allParts.push(curr);
            display.textContent = "0";
            operate(allParts, allResults);
            console.log(allParts);
        }
    });
});
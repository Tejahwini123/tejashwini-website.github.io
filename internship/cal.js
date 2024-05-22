const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (operator === '%') {
        display.value += '/100';
    } else {
        display.value += operator;
    }
}

function appendSquareRoot() {
    display.value += 'Math.sqrt(';
}

function appendDot() {
    const lastChar = display.value.slice(-1);
    if (lastChar !== '.' && !display.value.split(/[\+\-\*\/\s]/).pop().includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

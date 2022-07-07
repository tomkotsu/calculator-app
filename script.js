const add = function(x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    return x / y;
};

const operate = function (operator, x, y) {
    if (operator == '+') {
        return add(x, y);
    } else if (operator == '-') {
        return subtract(x,y);
    } else if (operator == '*') {
        return multiply(x,y);
    } else if (operator == '/') {
        return divide(x, y);
    };
};

let displayValue = '0';

const screen = document.querySelector('.screen');

const inputNum = function (num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    };
};

const numButtons = document.querySelectorAll('.num-btn');

numButtons.forEach((item) => {
    item.addEventListener('click', () => {
        inputNum(item.id);
        screen.textContent = displayValue;
    });
});

const clearButton = document.querySelector('.clr-btn')

clearButton.addEventListener('click', () => {
    displayValue = '0';
    screen.textContent = displayValue;
})

let value1 = 0;
let value2 = 0;
let op = '';

const opBtns = document.querySelectorAll('.op-btn');

opBtns.forEach((item) => {
    item.addEventListener('click', () => {
        value1 = Number(displayValue);
        op = item.id; 
        displayValue = '0'
        screen.textContent = displayValue;
    })
})

const eq = document.querySelector('.eq-btn')

eq.addEventListener('click', () => {
    value2 = Number(displayValue)
    displayValue = operate(op, value1, value2);
    screen.textContent = displayValue;
})
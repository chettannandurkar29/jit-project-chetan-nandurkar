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
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

console.log("Add:", calculator(150, 250, "+"));
console.log("Subtract:", calculator(250,100, "-"));
console.log("Multiply:", calculator(15, 10, "*"));
console.log("Divide:", calculator(150, 10, "/"));




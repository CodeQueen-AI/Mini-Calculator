"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt('Please enter your first number:'));
var n2 = parseInt(prompt('Please enter your second number:'));
var operator = prompt('Please enter your operator (+, -, *, /):');
if (operator == '+') {
    console.log("the anser of".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == '-') {
    console.log("the anser of".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == '*') {
    console.log("the anser of".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == '/') {
    console.log("the anser of".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log('please select the correct operators');
}

"use strict";
function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);

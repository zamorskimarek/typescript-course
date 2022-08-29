"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResolve(num) {
    console.log("Result:" + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResolve(add(5, 12));
// let combineValues: Function;
let combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResolve;
console.log(combineValues(8, 8));
let someValue;
addAndHandle(10, 20, (result) => {
    console.log(result);
});

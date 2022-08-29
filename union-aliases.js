"use strict";
function combine(input1, input2, resutlConversion) {
    // console.log(typeof number1);
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resutlConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resutlConversion === "as-number") {
    //     return +result;
    //     // or return parseFloat(result)
    //   } else {
    //     return result.toString();
    //   }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinesNames = combine("max", "anna", "as-text");
console.log(combinesNames);

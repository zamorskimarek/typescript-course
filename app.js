function combine(input1, input2, resutlConversion) {
    //   console.log(typeof number1);
    var result;
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
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinesNames = combine("max", "anna", "as-text");
console.log(combinesNames);

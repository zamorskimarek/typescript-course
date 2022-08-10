function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResolve(num: number): void {
  console.log("Result:" + num);
}

printResolve(add(5, 12));

let combineValues;

combineValues = add;

console.log(combineValues(8, 8));

// let someVAl: undefined;

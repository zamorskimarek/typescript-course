function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResolve(num: number): void {
  console.log("Result:" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResolve(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;
// combineValues = printResolve;

console.log(combineValues(8, 8));

let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

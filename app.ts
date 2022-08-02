// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "cooking"],
};

// let favActiv: any[];
// favActiv = ["sport", 1];

let favActiv: string[];
favActiv = ["sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

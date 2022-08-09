// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

const ADMIN = 0;
const READ_ONLY = 1;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 5,
  AUTHOR = "200",
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// let favActiv: any[];
// favActiv = ["sport", 1];

// person.role.push("admin");
person.role[1] = 10;
console.log(person.role[1]);

let favActiv: string[];
favActiv = ["sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

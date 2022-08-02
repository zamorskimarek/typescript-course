// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Max",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
// let favActiv: any[];
// favActiv = ["sport", 1];
person.role.push("admin");
// person.role[1] = 10;
console.log(person.role[1]);
var favActiv;
favActiv = ["sport"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}

let contacts = ["Mary", "Joel", "Danny"];

let ret_a = ["Stan", ...contacts];

// here we copy only the reference
let ret_b = contacts;

contacts.push("John");

console.log(ret_a);
console.log(ret_b);

let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};

console.log(employee);

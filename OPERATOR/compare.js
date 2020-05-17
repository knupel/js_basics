let num = 0;
let obj = new String("0");
let str = "0";
// var
console.log("let num = 0;\nlet obj = new String(\"0\");\nlet str = \"0\";");

// ==
console.log("==");
console.log("num == num", num == num); // true
console.log("obj == obj", obj == obj); // true
console.log("str == str", str == str); // true

console.log("num == obj", num == obj); // true
console.log("num == str", num == str); // true
console.log("obj == str", obj == str); // true
console.log("null == undefined", null == undefined); // true
console.log("obj == null", obj == null);
console.log("obj == undefined", obj == undefined);


// ===
console.log("===");
console.log("num === num", num === num); // true
console.log("obj === obj", obj === obj); // true
console.log("str === str", str === str); // true

console.log("num === obj", num === obj); // true
console.log("num === str", num === str); // true
console.log("obj === str", obj === str); // true
console.log("null === undefined", null === undefined); // true
console.log("obj === null", obj === null); // false
console.log("obj === undefined", obj === undefined); // false
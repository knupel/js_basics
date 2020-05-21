console.log("typeof(2) is",typeof(2)); // "number"
console.log("typeof 2 is",typeof 2); // "number"
console.log("typeof(1+1) is",typeof(1+1)); // "number"
console.log("typeof(\"hello\") is",typeof("hello")); // "string"
let str = "hello";
console.log("typeof str is",typeof str); // "string"
let str_obj = new String("hello");
console.log("typeof str_obj is",typeof str_obj); // "object"
str = str_obj;
console.log("str = str_obj > typeof str is",typeof str); // "object"

console.log("typeof(undefined) is",typeof(undefined)); // "undefined"

console.log("typeof(null) is",typeof null); // "object" the old bug
// the question is in TypeScript this bug still exist ?

console.log("typeof({}) is",typeof({})); // "object"
console.log("typeof([]) is",typeof([])); // "object"
console.log("typeof(x => x * 2) is",typeof(x => x * 2)); // "function"
console.log("typeof(new Date()) is",typeof(new Date())); // "object"
console.log("typeof(/(hello|goodbye)/) is",typeof(/(hello|goodbye)/)); // "object"

let a = null;
console.log("typeof(typeof(a)) is",typeof(typeof(a))); // "string"

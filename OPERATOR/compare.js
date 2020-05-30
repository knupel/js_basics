// link
/**

https://dorey.github.io/JavaScript-Equality-Table/?ck_subscriber_id=850681119
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness?ck_subscriber_id=850681119#Loose_equality_using
*/let num = 0;
let obj = new String("0");
let str = "0";
// var
console.log("let num = 0;\nlet obj = new String(\"0\");\nlet str = \"0\";");

// ==
console.log("== loss equality");
console.log("num == num", num == num); // true
console.log("obj == obj", obj == obj); // true
console.log("str == str", str == str); // true
console.log("{} == {}", {} == {}); // false

console.log("num == obj", num == obj); // true
console.log("num == str", num == str); // true
console.log("obj == str", obj == str); // true
console.log("null == undefined", null == undefined); // true
console.log("obj == null", obj == null); // false
console.log("obj == undefined", obj == undefined); // false


console.log("[[]] == ''",[[]] == ''); // true
console.log("true == [1]",true == [1]); // true
console.log("false == [0]",false == [0]); // true



// ===
console.log(" ");
console.log("=== strict equality");
console.log("num === num", num === num); // true
console.log("obj === obj", obj === obj); // true
console.log("str === str", str === str); // true
console.log("undefined === undefined", undefined === undefined); // true
console.log("null === null", null === null); // true
console.log("{} === {}", {} === {}); // false

console.log("num === obj", num === obj); // false
console.log("num === str", num === str); // false
console.log("obj === str", obj === str); // false
console.log("null === undefined", null === undefined); // true
console.log("obj === null", obj === null); // false
console.log("obj === undefined", obj === undefined); // false





// === exception
console.log(" ");
console.log("=== exception for strict equality");
console.log("NaN === NaN", NaN === NaN); // false
console.log("-0 === 0",-0 === 0); // true
console.log("0 === -0",0 === -0); // true
let h = 0;
let w = -0;
console.log("let w = -0;");
console.log("let h = 0;");
console.log("h === w", h === w); // true
console.log("Object.is(h,w)", Object.is(h,w)); // false



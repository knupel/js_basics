console.log(typeof(true)); // "boolean"
console.log(typeof(false)); // "boolean"

// We can perform logical operations with them:

let is_sad = true;
let is_happy = !is_sad; // The opposite
let is_feeling = is_sad || is_happy; // Is at least one of them true?
let is_confusing = is_sad && is_happy; // for me is false, because one them is false
console.log("is_feeling is ",is_feeling); 
console.log("is_confusing is ",is_confusing); 


console.log("0.1 + 0.2 === 0.3",0.1 + 0.2 === 0.3); // false
console.log("0.1 + 0.2 === 0.30000000000000004",0.1 + 0.2 === 0.30000000000000004); // true

console.log("Number.MAX_SAFE_INTEGER",Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log("Number.MAX_SAFE_INTEGER + 1",Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log("Number.MAX_SAFE_INTEGER + 2",Number.MAX_SAFE_INTEGER + 2); // 9007199254740992
console.log("Number.MAX_SAFE_INTEGER + 3",Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log("Number.MAX_SAFE_INTEGER + 4",Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
console.log("Number.MAX_SAFE_INTEGER + 5",Number.MAX_SAFE_INTEGER + 5); // 9007199254740996

console.log("Number.MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER);     // -9007199254740991
console.log("Number.MIN_SAFE_INTEGER - 1",Number.MIN_SAFE_INTEGER - 1); // -9007199254740992
console.log("Number.MIN_SAFE_INTEGER - 2",Number.MIN_SAFE_INTEGER - 2); // -9007199254740992
console.log("Number.MIN_SAFE_INTEGER - 3",Number.MIN_SAFE_INTEGER - 3); // -9007199254740994
console.log("Number.MIN_SAFE_INTEGER - 4",Number.MIN_SAFE_INTEGER - 4); // -9007199254740996
console.log("Number.MIN_SAFE_INTEGER - 5",Number.MIN_SAFE_INTEGER - 5); // -9007199254740996


console.log("10 + 20 === 30",10 + 20 === 30);
console.log("10 + 20 = ",10 + 20);
console.log("0.1 + 0.2 === 0.3", 0.1 + 0.2 === 0.3);
console.log("0.1 + 0.2 =", 0.1 + 0.2);

console.log("1/1 is", 1/1); // 1
console.log("0/1 is", 0/1); // 0
console.log("0/0 is", 0/0); // NaN
console.log("typeof(NaN) is",typeof(NaN), "hahahaha Not a Number is a Number type"); // "number"
console.log("1/0 is", 1/0); // Infinity

let inf = 1/0;
console.log("0 - Infinity", 0 - inf); // -Infinity
console.log("1 / Infinity", 1 / inf); // -Infinity

let machin;
let truc = null;
truc = machin;
console.log("typeof(truc)", typeof(truc));


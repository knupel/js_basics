console.log("1/1 is", 1/1); // 1
console.log("0/1 is", 0/1); // 0
console.log("0/0 is", 0/0); // NaN
console.log("typeof(NaN) is",typeof(NaN), "hahahaha Not a Number is a Number type to say to other you're not part of us"); // "number"
/**
typeof(NaN) is a number because NaN is a numeric value. 
It’s called “Not a Number” because it represents the idea of an "invalid" number.
*/
console.log("1/0 is", 1/0); // Infinity

let inf = 1/0;
console.log("0 - Infinity", 0 - inf); // -Infinity
console.log("1 / Infinity", 1 / inf); // -Infinity

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


let alot = 9007199254740991n; // Notice n at the end
console.log("bigInt alot",alot);
console.log("alot + 1n",alot + 1n); // 9007199254740992n
console.log("alot + 2n",alot + 2n); // 9007199254740993n
console.log("alot + 3n",alot + 3n); // 9007199254740994n
console.log("alot + 4n",alot + 4n); // 9007199254740995n
console.log("alot + 5n",alot + 5n); // 9007199254740996n

// different cote for String "" '' `` 
console.log(typeof("こんにちは")); // "string"
console.log(typeof('こんにちは')); // "string"
console.log(typeof(`こんにちは`)); // "string"
console.log(typeof('')); // "string"

let answer = prompt('Enter your name');
console.log("answer:",answer, "is", typeof answer); // ?

console.log("typeof({})",typeof({})); // "object"
console.log("typeof([])",typeof([])); // "object"
console.log("typeof(new Date())",typeof(new Date())); // "object"
console.log("typeof(/\d+/)",typeof(/\d+/)); // "object"
console.log("typeof(Math)",typeof(Math)); // "object"

// Unlike everything before, objects are not primitive values. 
//This also means that by default, they’re mutable. We can access their properties with . or []:

let me = { name: 'Gérard' };
console.log(me.name);
me.name = 'Maurice from dot'; // Dot notation
console.log(me.name);
me['name'] = 'Didier from array'; // Bracket notation
console.log(me.name);

for (let i = 0; i < 7; i++) {
	// only one log, for the engine the value is always the same. 
	// only count the time
	console.log(2); 
}

for (let i = 0; i < 7; i++) {
	console.log({});
}

console.log("here we call the function");
let func = function() { return 7; };
for (let i = 0; i < 7; i++) {
	console.log("console.log(func) 7 times",func);
}

console.log("here we call the result of function");
for (let i = 0; i < 7; i++) {
	console.log("console.log(func()) 7 times",func());
}

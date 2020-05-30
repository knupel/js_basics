let value = Symbol();
console.log("typeof(value)", typeof(value)); // "symbol"
value = 12 ;
console.log("typeof(value)", typeof(value)); // "number"
value = 'truc';
console.log("typeof(value)", typeof(value)); // "string"
value = {
	a: 2,
	b: "b",
}
console.log("typeof(value)", typeof(value)); // "object"
console.log("typeof(value.a)", typeof(value.a)); // "number"
console.log("typeof(value.b)", typeof(value.b)); // "string"
value = [1,,3];
console.log("typeof(value)", typeof(value)); // "object"
console.log("typeof(value[0])", typeof(value[0])); // "number"
console.log("typeof(value[1])", typeof(value[1])); // "undefined"
console.log("typeof(value[2])", typeof(value[2])); // "number"
value = 9007199254740991n; // Notice n at the end
console.log("typeof(value)", typeof(value)); // "object"

value = function() {};
console.log("typeof(value)", typeof(value)); // "function"
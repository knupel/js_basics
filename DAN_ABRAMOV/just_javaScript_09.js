let human = {
  teeth: 32
};

let gwen = {
  __proto__: human,
  age: 19
};

console.log("human.age",human.age); // undefined
console.log("gwen.age",gwen.age); // 19

console.log("human.teeth",human.teeth); // 32
console.log("gwen.teeth",gwen.teeth); // 32

console.log("human.tail",human.tail); // undefined
console.log("gwen.tail",gwen.tail); // undefined


human = {
  teeth: 32
};

gwen = {
  __proto__: human,
  // Note: no own teeth property
};

let stan = {
	teeth: gwen.teeth,
}

gwen.teeth = 31;

console.log("human.teeth",human.teeth); // 32
console.log("gwen.teeth",gwen.teeth); // 31
console.log("stan.teeth",stan.teeth); // 32


console.log("human.hasOwnProperty('teeth')",human.hasOwnProperty('teeth')); // true
console.log("gwen.hasOwnProperty('teeth')",gwen.hasOwnProperty('teeth')); // true
console.log("stan.hasOwnProperty('teeth')",stan.hasOwnProperty('teeth')); // true



// prototype pollution by contagion
let obj = {};
obj.__proto__.smell = 'cheese';

console.log("human.hasOwnProperty(smell)",human.hasOwnProperty(smell));
console.log("human.smell",human.smell);





let goose = { location: 'heaven' }
let cheese = {
	__proto__: goose,
}

console.log("cheese === goose",cheese === goose);
console.log("cheese.location",cheese.location);
goose.location = 'hell';
console.log("cheese.location",cheese.location);

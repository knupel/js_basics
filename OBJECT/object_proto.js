/**
https://2ality.com/2015/09/proto-es6.html?ck_subscriber_id=850681119
*/
let fx = 2;
console.log("fx.hasOwnProperty",fx.hasOwnProperty);
console.log("fx.toString",fx.toString);

let ly = {
};
console.log("ly.hasOwnProperty",ly.hasOwnProperty);
console.log("ly.toString",ly.toString);

let no_proto = {
	__proto__: null
};
console.log("no_proto.hasOwnProperty",no_proto.hasOwnProperty);
console.log("no_proto.toString",no_proto.toString);


let papa = {};
papa.__proto__.smell = 'cheese';

console.log("fx.hasOwnProperty(smell)",fx.hasOwnProperty(smell));
console.log("fx.smell",fx.smell);
// console.log("fx.toString()",fx.toString();



let original = {
	brain: 1,
};

let human = {
	__proto__: original,
};

console.log("original.hasOwnProperty('brain')",original.hasOwnProperty('brain')); // true
console.log("human.hasOwnProperty('brain')",human.hasOwnProperty('brain')); // false

console.log("original.brain",original.brain); // 1
console.log("human.brain",human.brain); // 1







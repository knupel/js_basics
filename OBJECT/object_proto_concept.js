
/**



not finish, just started topic 
look here for more detail
https://2ality.com/2015/09/proto-es6.html?ck_subscriber_id=850681119


*/




// step 0
let original = {
	brain: 1,
};

let avatar = Object.getPrototypeOf(original);

console.log("original.hasOwnProperty('brain')",original.hasOwnProperty('brain'));
console.log("avatar.hasOwnProperty('brain')",avatar.hasOwnProperty('brain'));

console.log("original.brain",original.brain);
console.log("avatar.brain",avatar.brain);

let clone = Object.create(avatar);
console.log("clone.hasOwnProperty('brain')",clone.hasOwnProperty('brain'));
console.log("clone.brain",clone.brain);


// step 1
let human = {
	__proto__: original,
};

console.log("human.hasOwnProperty('brain')",human.hasOwnProperty('brain'));
console.log("human.brain",human.brain);
// 'use strict';
let reaction = 'yikes';
reaction[0] = 'l'; // cannot possible in  'use strict';
// console.log(reaction[0]); // display 'y'
/**
* about Strict mode
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode?ck_subscriber_id=850681119
*
*/
console.log("typeof reaction is", typeof reaction, "\n\n");
for(let i = 0 ; i < reaction.length ; i++) {
	let a = 'a';
	reaction[i] = a; // cannot possible in  'use strict';
	// we cannot because str is a string and string is a primitive type, so we cannot acces to change the element directly
	// the element of string is immutable.
	console.log("typeof a is",typeof a );
	console.log("reaction[i] is",typeof reaction[i]);
	console.log(i,a,reaction[i]);
}
console.log(reaction);


let str = 'Le chien';
str = 'Le chat';
console.log(str); // that's work because we work on the global variable string not on the elements of this one


function double(x) {
  x = x * 2;
}

let units = 10;
double(units);
console.log("units:",units); // ?
units = 'huit';
console.log("typeof units is", typeof units);

let answer = true;
console.log("typeof answer is", typeof answer);
answer.opposite = false;
console.log("typeof answer.opposite is", typeof answer.opposite);

// null = 10;
console.log("null:", null);


let arr = ['puck', 'man'];
feed(arr);
console.log("arr[0] is: ", arr[0]);


function feed(variable) {
	variable[0] = 'F';
}







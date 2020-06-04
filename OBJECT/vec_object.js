const vec = {
	x: 0,
	y: 0,
	z: 0,
};

let vec_a = Object.create(vec);


console.log("vec_a.x",vec_a.x);
vec.x = 10;
console.log("vec.x = 10; by this way all the value is changed for the object based on this prototype");
let vec_b = Object.create(vec);
console.log("vec_a.x",vec_a.x);
console.log("vec_b.x",vec_b.x);
console.log("vec_b.w",vec_b.w);




const vec = {
	type: "vec",
	x: 0,
	y: 0,
	z: 0,

	get_x() {
		return this.x;
	},

	get_y() {
		return this.y;
	},

	get_z() {
		return this.z;
	}
};

// "J'écris avec un stylo bille bleu de marque Bic"
console.log(`mon vecteur ${vec.x = 10}  ${vec.y = true} ${vec.z = 'truc'}`);
// console.log(`vec.x is a ${typeof vec.x}`);
// console.log(`vec.y is a ${typeof vec.y}`);
// console.log(`vec.z is a ${typeof vec.z}`);

console.log("vec.x is a", typeof vec.x);
console.log("vec.y is a", typeof vec.y);
console.log("vec.z is a", typeof vec.z);

console.log("vec.get_x():", vec.get_x());
console.log("vec.get_y():", vec.get_y());
console.log("vec.get_z():", vec.get_z());

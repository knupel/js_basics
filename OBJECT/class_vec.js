class vec {
	constructor(x,y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	get_x() {
		return this.x;
	}

	get_y() {
		return this.y;
	}

	get_z() {
		return this.z;
	}
};

console.log("\nset class arguments");
console.log(`mon vecteur ${vec.x = 10}  ${vec.y = true} ${vec.z = 'truc'}`);

console.log("\nglobal acces to class arguments");
console.log("vec.x is a", typeof vec.x);
console.log("vec.y is a", typeof vec.y);
console.log("vec.z is a", typeof vec.z);

console.log("vec.x:", vec.x);
console.log("vec.y:", vec.y);
console.log("vec.z:", vec.z);


console.log("\nset object from class arguments: let vec1 = new vec(1,2,3)");
let vec1 = new vec(1,2,3);
let vec2 = new vec(4,5,6);
console.log("global acces to object arguments");

console.log("vec1.get_x():", vec1.get_x());
console.log("vec1.get_y():", vec1.get_y());
console.log("vec1.get_z():", vec1.get_z());
console.log("vec2.get_x():", vec2.get_x());
console.log("vec2.get_y():", vec2.get_y());
console.log("vec2.get_z():", vec2.get_z());

console.log("vec1.x", vec1.x);
console.log("vec2.x", vec2.x);

console.log("\nglobal acces to class arguments");
console.log("vec.x:", vec.x);
console.log("vec.y:", vec.y);
console.log("vec.z:", vec.z);

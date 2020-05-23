const num = [1, 2, 3];
console.log("\nnum");
num.forEach(elem => {
	console.log(elem);
});

const map_num = num.map(elem => elem * 2); // [2, 4, 6]
console.log("\nmap num");
map_num.forEach(elem => {
	console.log(elem);
});
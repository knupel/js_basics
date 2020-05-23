const primary = ['jaune', 'bleu'];
primary.forEach(elem => {
	console.log(elem);
});

// push
primary.push("rouge");
console.log("\nprimary");
primary.forEach(elem => {
	console.log(elem);
});

const complementary = ['vert', 'violet', 'orange'];
console.log("\ncomplementary");
complementary.forEach(elem => {
	console.log(elem);
});

// concat array
const colour = primary.concat(complementary);
console.log("\npalette colour");
colour.forEach(elem => {
	console.log(elem);
});

// concat elements
const colour_sup = colour.concat("noir", "blanc");
console.log("\npalette colour_sup");
colour_sup.forEach(elem => {
	console.log(elem);
});

// remove the last
colour_sup.pop();
console.log("\npalette colour_sup");
colour_sup.forEach(elem => {
	console.log(elem);
});

// remove specific
let index = colour_sup.indexOf('noir');
colour_sup.splice(index, 1);
console.log("\npalette colour_sup");
colour_sup.forEach(elem => {
	console.log(elem);
});

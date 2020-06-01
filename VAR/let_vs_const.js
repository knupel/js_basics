let color = {
	value : 'orange',
};


const nuance = {
	value : 'deep grey',
};


color = nuance;
nuance.value = "noir"; // mutation possible in the const variable, because the elements is not const.
// nuance = color; // TypeError: invalid assignment to const `nuance'

console.log("color.value",color.value);
console.log("nuance.value",nuance.value);



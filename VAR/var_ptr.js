

let arr = [0,1,2,3];
let str = 'puck man';
let arr_char = str.split('');
// log(arr);
// log(str);
print(arr);
print(str);
print(arr_char);


arr[0] = 9;
str[0] = 'f';
arr_char[0] = 'f';
print(arr);
print(str);
print(arr_char);

str = 'pac' + ' ' + 'man';
print(" >>> ");
print(str);


function log(list) {
	console.log("log: read list");
	for (let elem of list) {
  	console.log(elem);
	}
}

function print(list) {
	for (let elem of list) {
		// process.stdout.write(elem);
		document.write(elem);
	}
	document.write("\n");
}

// to change String elem of String 
// you need to change all the String, because in EcmaaSript it's a type.


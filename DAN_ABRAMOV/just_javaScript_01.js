/**
* 
* work around the newletter to change mental model.
* the way of code of Dan Abramov
*
* 2020-2020
* ex_01.0.0.1
*/

let a = 10;
let b = a;
console.log("a:",a,"b:",b);
a = 0;
console.log("a:",a,"b:",b);
b = 'truc' + a;
console.log("a:",a,"b:",b);

/*
let metadata = {
	title: "unknow"
}


let original = {
	a: 100,
	b: 1000,
	metadata: "cyberpunk"
}


let struct = {
	a: original.a,
	b: original.b,
	title: original.title
}

struct.title = "matrix";

console.log("struct.a:",struct.a,"struct.b:",struct.b,"struct.title:",struct.title);

*/

function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.');
  }
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata,
  };
  copy.metadata.title = 'Copy of ' + original.metadata.title;
  return copy;
}

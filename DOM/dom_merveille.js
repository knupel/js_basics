console.log(document.body.childNodes[5].childNodes[1]);

let elem = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(elem[0]); // Affiche le premier titre h2
console.log(elem.length); // Affiche 3


// Find the first ID elements with the specified target ID
let target_id = "nouvelles";
let spec_elem_id = document.getElementById(target_id);
console.log(spec_elem_id);


// Find all elements from a specific class html
let target_class = "merveilles";
// let target_class = "existe";
let spec_elem_class = document.getElementsByClassName(target_class);
for (let i = 0; i < spec_elem_class.length; i++) {
	console.log(spec_elem_class[i]);
}



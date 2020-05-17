// https://developer.mozilla.org/fr/docs/Web/API/Node

var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
	console.log("Body is a element node");
} else {
	console.log("Body is textual node");
}

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
let len = document.body.childNodes.length;
console.log("document.body.childNodes.length",len);
console.log(document.body.childNodes[len -1]);

// for (let i = 0; i < document.body.childNodes.length; i++) {
// 	console.log(document.body.childNodes[i]);
// }



let n1 = document.body.childNodes[1];
console.log("n1.parentNode", n1.parentNode); // Affiche le noeud body

console.log("document.parentNode",document.parentNode); // Affiche null : document n'a aucun noeud parent
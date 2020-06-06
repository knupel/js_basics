/*
to test use index_object_this.html
*/
class Obj {
	constructor() {
		this.arg = "truc";
		console.log("constructor this",this);
	}

	method_function = function() {
		console.log("method_function use this",this);
		document.getElementById("test_this").innerHTML += this;
	}

	method_arrow = () => {
		console.log("method_arrow use this",this);
		document.getElementById("test_this").innerHTML += this;
	}
};

obj = new Obj();

window.addEventListener("load", obj.method_arrow);
document.getElementById("button_method_arrow").addEventListener("click", obj.method_arrow);
document.getElementById("button_method_function").addEventListener("click", obj.method_function);

obj.method_function();
obj.method_arrow();




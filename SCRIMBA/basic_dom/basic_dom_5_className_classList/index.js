// className
var className = document.querySelector("#header").className;
console.log(className);
// classList
document.querySelector("#header").className += " truc";
console.log(document.querySelector("#header").className);

document.querySelector("#header").classList.add("new-class");
console.log(document.querySelector("#header").className);

document.querySelector("#header").classList.remove("another");
console.log(document.querySelector("#header").className);

// toggle remove if the class exist, and add if this one don't exist
document.querySelector("#header").classList.toggle("another");
console.log(document.querySelector("#header").className);

document.querySelector("#header").classList.toggle("another");
console.log(document.querySelector("#header").className);

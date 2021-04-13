/**
 * Can be use to wait time before execture an action
 * */

// https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(function () {
  alert("Hello");
}, 3000);

var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

// clear interval
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}

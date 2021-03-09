let a = document.querySelectorAll("#favorite-things");
console.log(a);

let b = document.querySelector("#favorite-things");
console.log("querySelector(#favorite-things)", b);

var c = document.querySelector("ol#favorite-things > li");
console.log("querySelector: ol#favorite-things > li", c);

var d = document.querySelectorAll("ol#favorite-things > li");
console.log("querySelectorAll(ol#favorite-things > li)", Array.from(d));

for (let i = 0; i < d.length; i++) {
  d[i].textContent = "truc";
}

/*
To change text there is three solutions.
*/
// innerHTML - security risk
// innerText - "expensive"
// textContent

var person = { name: "Joe" };
person.name = "Jim";
console.log(person);

let title_by_id = document.getElementById("title");

// let para = document.querySelector("#paragraph").textContent;
// console.log("title.textContent", title_by_id.textContent);

document.querySelector("#paragraph").textContent = title_by_id.textContent;
console.log("change by id", document.querySelector("#paragraph").textContent);

let title_by_query = document.querySelector("#title");
document.querySelector("#paragraph").textContent = title_by_query.textContent;
console.log(
  "change by query",
  document.querySelector("#paragraph").textContent
);

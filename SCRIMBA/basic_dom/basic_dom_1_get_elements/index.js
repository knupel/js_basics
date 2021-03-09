const things = document.getElementsByClassName("things");
console.log("things by class:", things);
for (let i = 0; i < things.length; i++) {
  console.log(things[i].innerText);
}

const thing_id = document.getElementById("ID things");
console.log("things by id:", thing_id);

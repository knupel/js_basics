let truc = document.getElementById("it_s_you");
let button = document.getElementById("button_id");
let title = document.getElementById("title");
console.log(truc);
/*
it's like use css stylesheet with
#it_s_you {
  background = "magenta";
  color = "yellow";
}
*/
truc.style.background = "magenta";
truc.style.color = "yellow";

button.style.background = "cyan";
button.style.color = "magenta";

let is = false;
button.addEventListener("click", function () {
  if (is) {
    is = false;
    button.style.background = "cyan";
  } else {
    button.style.background = "yellow";
    is = true;
  }

  title.textContent = "I'm learning JavaScript";
  button.textContent = "Et voilà";
  console.log("button was clicked!", is);
});

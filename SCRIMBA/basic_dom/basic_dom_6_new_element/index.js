let a = document.createElement("li");
a.textContent = "12";
document.getElementById("my-list").append(a);

let b = document.createElement("li");
b.textContent = "12000";
document.getElementById("my-list").prepend(b);

let p = document.createElement("p");
p.textContent =
  "Voici le résumé de la bible: Dieu dit à son fils -Alors elle était drôle ma blague?";
// document.getElementById("superbody").append(p);

document.body.append(p);

p.style.textAlign = "center";
p.style.fontSize = "30px";
p.style.color = "magenta";

let my_list = document.getElementById("my-list");
my_list.innerHTML += "<li>3</li>";

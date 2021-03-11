const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");

function add_paragraph(event) {
  event.preventDefault();
  let buf = entryTextbox[0].value;
  console.log(entryTextbox[0].value);
  if (buf !== "") {
    let p = document.createElement("p");
    p.textContent = buf;
    document.body.append(p);
    p.style.background = "magenta";
    p.style.color = "white";
    p.style.padding = "2em";
    p.style.maxWidth = "20em";
    p.style.border = "unset";
    p.style.borderRadius = "25px";
    p.style.textAlign = "center";
    p.style.fontSize = "14px";
    entryTextbox[0].value = "";
    document.getElementById("ta").placeholder = "";
  }
}

entryForm.addEventListener("submit", add_paragraph);

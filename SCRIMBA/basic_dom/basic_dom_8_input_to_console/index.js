const buf = document.querySelector("input");
function func(event) {
  console.log(event.target.value);
}
buf.addEventListener("input", func);

const slides = document.getElementsByClassName("carousel-item");
let index = 0;
const total_slides = slides.length;

for (let i = 0; i < slides.length; i++) {
  console.log(slides[i]);
}

let button_prev = document.getElementById("carousel-button-prev");
let button_next = document.getElementById("carousel-button-next");

function clean_slide(index) {
  slides[index].classList.remove("carousel-item-visible");
  slides[index].classList.add("carousel-item-hidden");
}
function go_prev(event) {
  clean_slide(index);
  index--;
  if (index < 0) index = total_slides - 1;
  slides[index].classList.add("carousel-item-visible");
  console.log("prev", index, " / ", total_slides);
}

function go_next(event) {
  clean_slide(index);
  index++;
  if (index >= total_slides) index = 0;
  slides[index].classList.add("carousel-item-visible");
  console.log("next", index, " / ", total_slides);
}

button_prev.addEventListener("click", go_prev);
button_next.addEventListener("click", go_next);

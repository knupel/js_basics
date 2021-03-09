/*
 * Show all event happen in document
 */
// Object.keys(window).forEach((key) => {
//   if (/^on/.test(key)) {
//     window.addEventListener(key.slice(2), (event) => {
//       console.log(event.type);
//     });
//   }
// });

let bb = document.getElementById("button B");

function func() {
  if (!is) {
    is = true;
    document.body.style.background = "grey";
  } else {
    is = false;
    document.body.style.background = "blue";
  }
  console.log(is);
}

bb.addEventListener("click", func); // execute not now but all the time in the future.
// bb.addEventListener("click", func()); // () execute immetiatly, but only once

// other way
let ba = document.getElementById("button A");

let is = false;
// by using anonymous function
ba.addEventListener("click", function () {
  if (!is) {
    is = true;
    document.body.style.background = "red";
  } else {
    is = false;
    document.body.style.background = "yellow";
  }
  console.log(is);
});

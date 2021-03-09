const squares = Array.from(document.querySelectorAll(".grid div"));

//Challenge: We use what we have learnt in the previous three lessons in order
//to visually colour a game board in our browser. At the moment the board is empty.
//Please colour the squares, similar to like you would on a chess board using the
//for loop.

//Don't forget to share your code in the #share-your-code channel on discord.
// console.log("length", squares.length);
// for (let index = 0; index < squares.length; index++) {
//   squares[index].setAttribute("id", "cell");
//   let cell = document.getElementById("cell");;
//   if (index % 2 === 0) {
//     cell.style.background = "yellow";
//   } else {
//     cell.style.background = "magenta";
//   }
// }

console.log("length", squares.length);

for (let i = 0; i < squares.length; i++) {
  if (i % 2 === 0) {
    squares[i].classList.add("even");
  } else squares[i].classList.add("odd");
}

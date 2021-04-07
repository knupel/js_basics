const width = 28;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let squares = [];

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [1, 1, 1, 1, 1, 1, 1, 1];

// create board
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    //create a square
    const square = document.createElement("div");
    //put the square in grid
    grid.appendChild(square);
    squares.push(square);
  }
}

createBoard();

const grid = document.querySelector(".grid");
let board = [];

const start_button = document.getElementById("start");
// or
// const startButton = document.querySelector('#start')

const score = document.getElementById("score");

function build_grid(num) {
  for (let i = 0; i < num; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    board.push(cell);
  }
}

build_grid(100);

const grid = document.querySelector(".grid");

const start_button= document.getElementById('start')
// or
// const startButton = document.querySelector('#start')

const score = document.getElementById('score')

function build_grid(num) {
  for(int i = 0 ; i < num ; i++) {
    let cell = document.createElement("div");
    document.grid.append(cell);
  }
}

build_grid(100);
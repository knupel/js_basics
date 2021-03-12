const grid = document.querySelector(".grid");
let board = [];
let current_snake = [2, 1, 0];
let direction = 1;
const board_size = 10;
let apple_index = 0;
let interval_time_speed = 1000;
let speed = 0.9;
let timer_id = 0;

const start_button = document.getElementById("start");
// const startButton = document.querySelector('#start')
const score_display = document.getElementById("score");
let score = 0;
document.addEventListener("keyup", control);

function build_grid(num) {
  for (let i = 0; i < num; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    board.push(cell);
  }
}

function move(size) {
  if (
    (current_snake[0] + size >= size * size && direction === size) || //if snake has hit bottom
    (current_snake[0] % size === size - 1 && direction === 1) || //if snake has hit right wall
    (current_snake[0] % size === 0 && direction === -1) || //if snake has hit left wall
    (current_snake[0] - size < 0 && direction === -size) || //if snake has hit top
    board[current_snake[0] + direction].classList.contains("snake")
  )
    return clearInterval(timerId);
  //remove last element from our currentSnake array
  const cell = current_snake.pop();
  //remove styling from last element
  board[cell].classList.remove("snake");
  //add sqaure in direction we are heading
  current_snake.unshift(current_snake[0] + direction);

  //deal with snake head gets apple
  if (board[current_snake[0]].classList.contains("apple")) {
    //remove the class of apple
    board[current_snake[0]].classList.remove("apple");
    current_snake.push(current_snake[0] + direction);

    generate_apples();
    score++;
    score_display.textContent = score;
    // need to update setInterval
    interval_time_speed *= speed;
    timer_id = setInterval(move, interval_time_speed);
  }
  //add styling so we can see it
  board[current_snake[0]].classList.add("snake");
}

//39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow
function control(event) {
  let up = 38;
  let down = 40;
  let left = 37;
  let right = 39;
  if (event.keyCode === up) {
    console.log("up pressed");
    direction = -board_size;
  } else if (event.keyCode === down) {
    console.log("down pressed");
    direction = board_size;
  } else if (event.keyCode === right) {
    console.log("right pressed");
    direction = 1;
  } else if (event.keyCode === left) {
    console.log("left pressed");
    direction = -1;
  }
}

function start_game() {
  for (let index = 0; index < board.length; index++) {
    board[index].classList.remove("apple");
    board[index].classList.remove("snake");
  }
  // board.forEach((index) => {
  //   board[index].classList.remove("apple");
  //   board[index].classList.remove("snake");
  // };
  clearInterval(timer_id);
  current_snake = [2, 1, 0];
  interval_time_speed = 1000;
  score = 0;
  direction = 1;
  generate_apples();
  current_snake.forEach((index) => board[index].classList.add("snake"));
  timer_id = setInterval(move, interval_time_speed);
}

start_button.addEventListener("click", start_game);

function generate_apples() {
  do {
    apple_index = Math.floor(Math.random() * board.length);
  } while (board[apple_index].classList.contains("snake"));
  board[apple_index].classList.add("apple");
}

build_grid(board_size * board_size);
current_snake.forEach((index) => board[index].classList.add("snake"));
move(board_size);
start_game();
generate_apples();

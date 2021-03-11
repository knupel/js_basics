// Create variables for the game state
let score_1 = 0;
let score_2 = 0;
let player_1_is = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */

let roll_btn = document.getElementById("rollBtn");

function reset() {
  score_1 = 0;
  score_2 = 0;
}
function launch_dice(event) {
  let max = 6;
  let res = Math.floor(Math.random() * max) + 1;
  if (player_1_is) {
    message.textContent = "Player 2 Turn";
    player1Dice.textContent = res;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    score_2 += res;
    player2Scoreboard.textContent = score_2;
    player_1_is = false;
  } else {
    message.textContent = "Player 1 Turn";
    player2Dice.textContent = res;
    score_1 += res;
    player1Scoreboard.textContent = score_1;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player_1_is = true;
  }

  let victory = 25;
  if (score_1 >= victory) {
    message.textContent = "PLAYER ONE WON";
    reset();
  } else if (score_2 >= victory) {
    message.textContent = "PLAYER TWO WON";
    reset();
  }
}

roll_btn.addEventListener("click", launch_dice);

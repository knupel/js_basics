// Hook an event listener up with the button, and log out the input field's value when it's clicked

const my_emojis = ["👨‍💻", "⛷", "🍲"];
const emoji_container = document.getElementById("emoji-container");

function render_emoji() {
  for (let i = 0; i < my_emojis.length; i++) {
    const temp = document.createElement("span");
    temp.textContent = my_emojis[i];
    emoji_container.append(temp);
  }
}

function add_end() {
  add(true);
}

function add_begin() {
  add(false);
}

function remove_end() {
  remove(true);
}

function remove_begin() {
  remove(false);
}

function add(at_the_end_is) {
  const temp = document.createElement("span");
  let emo_char = document.getElementById("emoji-input");
  if (emo_char) {
    temp.textContent = emo_char.value;
    if (at_the_end_is) emoji_container.append(temp);
    else emoji_container.prepend(temp);
    //
  }
  emo_char.value = "";

  emojiContainer.innerHTML = "";
  render_emoji();
}

function remove(at_the_end_is) {
  if (at_the_end_is) my_emojis.pop();
  else my_emojis.shift();
  // emojiContainer.innerHTML = "";
  render_emoji();
}

let button_add_end = document.getElementById("push-btn");
let button_add_begin = document.getElementById("unshift-btn");
let button_remove_end = document.getElementById("pop-btn");
let button_remove_begin = document.getElementById("shift-btn");

button_add_end.addEventListener("click", add_end);
button_add_begin.addEventListener("click", add_begin);

button_remove_end.addEventListener("click", remove_end);
button_remove_begin.addEventListener("click", remove_begin);

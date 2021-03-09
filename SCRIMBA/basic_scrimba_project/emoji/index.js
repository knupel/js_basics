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

function add() {
  const temp = document.createElement("span");
  let emo_char = document.getElementById("emoji-input");
  if (emo_char) {
    temp.textContent = emo_char.value;
    emoji_container.append(temp);
  }
  emo_char.value = "";

  emojiContainer.innerHTML = "";
  render_emoji();
}

let button = document.getElementById("push-btn");

button.addEventListener("click", add);

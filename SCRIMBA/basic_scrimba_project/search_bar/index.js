let content = document.getElementById("usernameInput");
let list = document.querySelectorAll("#results li");

function foo(event) {
  // event.preventDefault();
  let username = event.target.value.toLowerCase();
  // console.log(username.toLowerCase());
  for (let i = 0; i < list.length; i++) {
    if (list[i].textContent.toLowerCase().includes(username)) {
      // if (list[i].textContent.toLowerCase() === username) {
      console.log("Bingo: you find", username);
    }
  }
  let allNamesDOMCollection = document.getElementsByClassName("name");
  console.log(
    "allNamesDOMCollection[0].textContent",
    allNamesDOMCollection[0].textContent
  );
}
content.addEventListener("keyup", foo);

// document
//   .getElementById("usernameInput")
//   .addEventListener("keyup", function (event) {
//     let username = event.target.value;
//     console.log(username);
//   });

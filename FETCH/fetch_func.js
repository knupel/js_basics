//
/**
 * fetch work with a promise under the hood ?
 * maybe it's a reason why the there is then() func ?
 *
 */
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: "Dylan",
    email: "dylansemail310@gmail.com",
    body: "That was dope!",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

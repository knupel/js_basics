function bonjour(...arg) {
  let max = arg.length;
  let i = 0;
  while (i < max) {
    console.log("the value of arg is", arg[i]);
    i++;
  }
}
bonjour(1, 2, 3, "soleil"); // "Bonjour, Thomas !"

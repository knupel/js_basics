// we devlare the variable in the loop for,
// but this one is instantiate at the beginning and only is the loop for()
for (let i = 0, max = 10; i < max; i++) {
  console.log("j'en suis là", i);
}

let tab_for = ["truc", "machin", "bidule"];
for (let i = 0, max = tab_for.length; i < max; i++) {
  console.log("boucle fort classique", tab_for[i]);
}

// Why use const instead let, I don't know ?
// for (const elem of tab_for) {
for (let elem of tab_for) {
  console.log("un autre point fort", elem);
}

let sentence = "Knupel est un punk";
// split the sentence
for (const char of sentence) {
  console.log(char);
}

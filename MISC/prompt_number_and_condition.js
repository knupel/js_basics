// don't work in NODE.JS context
const res = Number(prompt("Entrez un nombre"));
if (res >= -1 && res <= 1) {
  console.log(res + " est un nombre réel et normalisé entre -1 et 1");
} else if (res > 0) {
  console.log(res + " est positif");
} else if (res < 0) {
  console.log(res + " est negatif");
  // } else if(res == 0) { // better to use === triple = for the equality, same for difference !==
} else if (res === 0) {
  console.log(res + " est zéro zéro zéro");
} else {
  console.log(res + " est vraiment n'importe quoi ou alors ce n'est juste pas un nombre ou peut-être un NaN_fromage");
}
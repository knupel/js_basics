const bonjour = function (prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}
console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

// new not natation for the same result it's named fat arrow function or fonction fléchée in french :)
const aurevoir = (prenom) => {
  const message = `Aurevoir, ${prenom} !`;
  return message;
}
console.log(aurevoir("Maurice")); // "Bonjour, Maurice !"

// by default a function have a return statement so we can write like that too
const salut = (prenom) => `Salut, ${prenom} !`;
console.log(salut("Stan")); // "Bonjour, Stan !"
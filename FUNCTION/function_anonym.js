const bonjour = function (prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

const aurevoir = (prenom) => {
  const message = `Aurevoir, ${prenom} !`;
  return message;
}

console.log(aurevoir("Maurice")); // "Bonjour, Thomas !"

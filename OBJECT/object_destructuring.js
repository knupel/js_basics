const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};

console.log("player.address.city:", player.address.city);

const { name, club, address } = player;

console.log("name:", name);
console.log("address.city:", address.city);

console.log(`${name} lives in ${address.city}`);

const {
  truc,
  machin,
  address: { chouette },
} = player;

console.log("name:", machin);
console.log("city:", chouette);

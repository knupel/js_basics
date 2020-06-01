let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' } 
};

let john = {
  surname: 'Watson',
  address: sherlock.address
};

console.log("\n",sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "London"
console.log(john.surname); // "Watson"
console.log(john.address.city); // "London"

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log("\n",sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Malibu"


john.address = { 
	city: 'Paris',
};

console.log("\n",sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Paris"

john = {
  surname: 'Coltran',
  address: { city: 'Nouvelle-Orléans' }
};

console.log("\n",sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Coltran"
console.log(john.address.city); // "Nouvelle-Orléans
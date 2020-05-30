let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' } 
};

let john = {
  surname: 'Watson',
  address: sherlock.address
};

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log("sherlock.surname",sherlock.surname); // ?
console.log("sherlock.address.city",sherlock.address.city); // ?
console.log("john.surname",john.surname); // ?
console.log("john.address.city",john.address.city); // ?







sherlock = { surname: 'Holmes', age: 64 };
console.log("sherlock.boat",sherlock.boat); // undefined
console.log("sherlock.boat.name",sherlock.boat.name); // TypeError!
let propertyName = prompt('What do you want to know?');
alert(sherlock[propertyName]); // Read property by its 
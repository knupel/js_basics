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

console.log(sherlock.surname); // ?
console.log(sherlock.address.city); // ?
console.log(john.surname); // ?
console.log(john.address.city); // ?



let president = {
	name: 'Pooh',
	// next : president // not possible
}
president.next = president; // follow this way to make possible
console.log("president.name",president.name);
console.log("president.next",president.next);
console.log("president.next.name",president.next.name);
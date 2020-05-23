let me = { name: 'Gérard' };
console.log(me.name);
me.name = 'Maurice from dot'; // Dot notation
console.log(me.name);
me['name'] = 'Didier from array'; // Bracket notation
console.log(me.name);
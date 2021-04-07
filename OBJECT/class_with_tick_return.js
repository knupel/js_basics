let cat = new Animal("Cat", 4);

// that's can be call directly without: ()
console.log(cat.metaData);

class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }
}

let obj = {
  name: "larry",
  age: 20,
  friends: ["john", "lisa", "al"],
  isPetOwner: true,
  sayGreeting: function () {
    console.log("Hello");
  },
};

console.log("name", obj.name);
console.log("sayGreeting", obj.sayGreeting);
console.log("sayGreeting()", obj.sayGreeting());
obj.sayGreeting();

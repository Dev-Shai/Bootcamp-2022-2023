//there a situations where you do not want to use arrow functions including when you want to use the this keyword in a method of an object or when you want to use the arguments object in a function or when you want to use the new keyword to create a new object from a constructor function or when you want to use the prototype property of a constructor function to add methods to all objects created from that constructor function or when you want to use the super keyword to call a method on an object's parent or when you want to use the yield keyword to pause and resume a generator function  - these are all situations where you want to use the this keyword
// 
// Avoid using arrow functions for object methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};

// var dog = {
//   name: "Lassie",
//   sound: "Woof!",
//   makeSound: function () { console.log(this.sound); },
//   readTag: function () {console.log("The dog's tag reads: " + this.name + "."); },
// };

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

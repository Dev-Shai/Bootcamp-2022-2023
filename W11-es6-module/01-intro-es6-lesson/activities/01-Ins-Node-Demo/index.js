// Run this from the command line using 'node index.js'
(function () {
  console.log(this);
})();

// this is an immediataly invoked function expression (IIFE)
// it is a function that is called immediately after it is created
// it is a way to create a new scope
// it is a way to create a new context
// it is a way to create a new this
// it is needed in node.js because node.js does not have objects including the window object, so we need to create a new scope, context, and this, so that we can use the this keyword in node.js
// in node.js, the this keyword is the global object
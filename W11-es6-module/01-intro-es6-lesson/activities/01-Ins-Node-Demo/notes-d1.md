ES6 is a lot of the syntax such as arrow functions let and const came from this. It is used in node.js. We'll look at how we can use these and other features to improve and reduce our code

node.js open source, cross platform JS enviro outside browser
can be used as a basis for web server (i.e. for full stack)

Helps install 3rd party libraries including NPS - node package management/manager

Node has its own built in or native modules (as well as being able to work with third party ones)like fs
var fs = require ('fs') (fs is file system)

JS is outside of browser so we dont have alerts prompts etc.

task 1 - 
the "this" is an immeditaly invoked function expression
morew notes on w11/01
// this is an immediataly invoked function expression (IIFE)
// it is a function that is called immediately after it is created
// it is a way to create a new scope
// it is a way to create a new context
// it is a way to create a new this
// it is needed in node.js because node.js does not have objects including the window object, so we need to create a new scope, context, and this, so that we can use the this keyword in node.js
// in node.js, the this keyword is the global object
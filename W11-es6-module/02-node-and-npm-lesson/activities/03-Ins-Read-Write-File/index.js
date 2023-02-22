// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
// readfile is a method of the fs module. it takes 3 arguments: the file you want to read, the encoding you want to use or format , and a callback function. the callback function takes 2 arguments: error and data. if there is an error, it will be passed to the error argument. if there is no error, the data will be passed to the data argument.
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
// this creates a new file so first give it the name of the file you want to create, then what  you want to pass into the file, and then a callback function. the callback function takes 2 arguments: error and data. if there is an error, it will be passed to the error argument. if there is no error, the data will be passed to the data argument. if you want to append to a file, use the appendFile method instead of writeFile. The appendfile also take 3 similar arguments.

// console.error is a method of the console object. it takes 1 argument: the error you want to pass in. it will print the error to the console in red. it is different from console.log because it is used to print errors to the console. console.log is used to print anything else to the console. console.log will print the data to the console in white. console.error will print the error to the console in red. 

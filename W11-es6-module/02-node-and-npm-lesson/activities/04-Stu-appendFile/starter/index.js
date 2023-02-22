// TODO: What are we importing?
const fs = require('fs');

// fs is a Node.js package for reading and writing files - it is standard. you need to first state you want to use it. then you can use it. you can use it to read files, write files, append files, etc. you can also use it to read and write to the console.

// require is used to import a module. In this case, we are importing the fs module. The fs module is a Node.js package for reading and writing files - it is standard. You need to first state you want to use it. Then you can use it. You can use it to read files, write files, append files, etc. You can also use it to read and write to the console.

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
  // err ? console.log('Commit logged!') : console.error(error!)
);

// the position of error and data is 
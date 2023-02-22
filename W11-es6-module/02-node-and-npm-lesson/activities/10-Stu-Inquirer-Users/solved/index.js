const inquirer = require('inquirer');
const fs = require('fs');
// in other situations you can use import inquirer from 'inquirer' and import fs from 'fs' but in this case we are using require because we are using node.js
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telepathy'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
// the const filename uses the data.name to create a filename with the user's name and then saves it as a json file in the same directory as the index.js file. the split method is used to remove the spaces in the name and the join method is used to replace the spaces with nothing. the toLowerCase method is used to make sure the name is all lowercase. the data.name is used to create the filename because it is the only data that is not an array. the data.stack and data.contact are arrays and therefore cannot be used to create a filename.
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
      // we use json.stringify here to convert the data into a string so that it can be saved as a json file. the null and '\t' are used to format the json file so that it is easier to read. it has to be a string because the writeFile method only accepts strings. the null is used to remove any properties that are set to null and the '\t' is used to add a tab between the properties.
    );
  });

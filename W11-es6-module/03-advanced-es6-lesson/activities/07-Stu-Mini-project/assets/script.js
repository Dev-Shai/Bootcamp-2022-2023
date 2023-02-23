// Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
const inquirer = require('inquirer');
const fs = require('fs');

function getHTML (userInput) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="./style.css" />
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My Generated Profile</title>
</head>
<body>
<header id="header">
    <h1>Hi My Name is ${userInput.name}</h1>
    <div class="title-second-header Location">
    I am from ${userInput.location}</span>
    </div>
</header>
<main>
    <section class="card" id"html-section">
    <h2>My Bio</h2>
    </br>
    <ul>
        <li>${userInput.bio}</li>
    </ul>
    <br>
    </section>
</main>

<footer>
    <nav class="my-navbar">
    <a href="https://www.linkedin.com/in/${userInput.linkedin}/">My Linkedin</a>
    <a href="https://www.github.com/${userInput.github}/">My GitHub</a>
    </nav>
</footer>
<script src="./script.js"></script>
</body>
</html>


`
}

// An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.

// You’ll need the following tools and technologies to accomplish this:

// fs for writing to the file system.

// inquirer for collecting user input.

// String template literals for generating a string version of the HTML document before it is written to the file system.

inquirer
.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'location',
    message: 'Where do you live?',
},
{
    type: 'input',
    name: 'bio',    
    message: 'Write a little bit about yourself',
},
{
    type: 'input',
    name: 'linkedin',    
    message: 'What is your LinkedIn username?',
},
{
    type: 'input',
    name: 'github',    
    message: 'What is your GitHub username',
},
])
.then((userInput) => {
    const fileContents = getHTML(userInput);

    fs.writeFile("index.html", fileContents, (err) => 
    err ? console.log(err) : console.log("Success!")
    );
});

// .then((data) => {
// const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
// );
// });


// Promises for handling asynchronous behavior. You’ll need to use the fs.writeFile() method to write the HTML document to the file system. This method is asynchronous, so you’ll need to use a promise to handle the asynchronous behavior. You can use the util.promisify() method to convert the fs.writeFile() method to a promise-based function. You can then use the .then() method to handle the promise. 
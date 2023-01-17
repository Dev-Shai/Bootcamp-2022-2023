// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");


console.log(headerDiv.children)
console.log(document.body.children[1].children[0]);

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";
headerDiv.children[0].style.color = "#FFFFFF";

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
  todoList.textContent = ""; // Initially set the text content of the todoList to an empty string
  todoCountSpan.textContent = todos.length; // Show the total count of todos on the page

  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li"); // Create an li element for each index of the array
    li.textContent = todos[i]; // Set the content of the created li element to the value of the current array index
    todoList.appendChild(li); // Append the new li to the ul provided
  }
}

renderTodos();

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  var todoValue = todoInput.value.trim(); // Get the value from the todo input field
  
  if (todoValue !== "") { // Make sure the value is not empty
    todos.push(todoValue); // Push the value to the todos array
    todoInput.value = ""; // Clear the input field
    renderTodos(); // Re-render the todoList
  }
});


// renderLastTodo();

// function displayMessage(type, message) {
// msgDiv.textContent = message;
// msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
// var email = localStorage.getItem("email")
// var password = localStorage.getItem("password")

// if (!email || !password) {
// return;
// }
// userEmailSpan.textContent = email;
// userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
// event.preventDefault();

// var email = document.querySelector("#email").value;
// var password = document.querySelector("#password").value;

// if (email === "") {
// displayMessage("error", "Email cannot be blank");
// } else if (password === "") {
// displayMessage("error", "Password cannot be blank");
// } else {
// displayMessage("success", "Registered successfully");

// // Save email and password to localStorage and render the last registered.
// localStorage.setItem("email", email);
// localStorage.setItem("password", password);
// renderLastRegistered();
// }
// });

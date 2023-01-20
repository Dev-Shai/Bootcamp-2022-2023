// // my solution
// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// // Check if todos are stored in localStorage and retrieve them if they are

// var storedTodos = JSON.parse(localStorage.getItem("todos"));
// var todos = storedTodos ? storedTodos : [];


// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var completeBtn = document.createElement("button");
//     completeBtn.textContent = "Complete";
//     li.appendChild(completeBtn);
//     todoList.appendChild(li);
//   }
// }

// // Store todos in localStorage
// function storeTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Re-render the list and store todos in localStorage
//   renderTodos();
//   storeTodos();
// });

// // When complete button is clicked...
// todoList.addEventListener("click", function(event) {
//   if (event.target.tagName === "BUTTON") {
//     var index = event.target.parentNode.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Re-render the list and store todos in localStorage
//     renderTodos();
//     storeTodos();
//   }
// });

// example solution

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = ""; // why is this necessary? So it is to "clear any previously rendered todo items from the list before re-rendering updated list" but does it make a difference? Oh i see, so it removes them from the list so they don't repeat themselves when refreshing the list with thenew item added
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;  // WHY DOES THIS NEED TO BE HERE? I CANT SEE ITS FUNCTION
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When an element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});
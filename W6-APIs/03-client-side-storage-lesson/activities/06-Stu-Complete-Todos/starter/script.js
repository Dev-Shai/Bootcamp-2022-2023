var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Check if todos are stored in localStorage and retrieve them if they are

var storedTodos = JSON.parse(localStorage.getItem("todos"));
var todos = storedTodos ? storedTodos : [];


renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    li.appendChild(completeBtn);
    todoList.appendChild(li);
  }
}

// Store todos in localStorage
function storeTodos() {
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

  // Re-render the list and store todos in localStorage
  renderTodos();
  storeTodos();
});

// When complete button is clicked...
todoList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    var index = event.target.parentNode.getAttribute("data-index");
    todos.splice(index, 1);

    // Re-render the list and store todos in localStorage
    renderTodos();
    storeTodos();
  }
});

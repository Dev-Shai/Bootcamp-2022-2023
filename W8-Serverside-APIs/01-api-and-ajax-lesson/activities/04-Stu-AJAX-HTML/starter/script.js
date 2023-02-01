// The below code fills in the first row of the table
var movieTable = document.querySelector("table");
var movieTableBody = document.querySelector("tbody");

// Check if the movie table data is stored in local storage
function getPreviousData () {
  if(localStorage.getItem("movieTableData")) {
  // If it is, then get the data from local storage and add it to the table
  var movieTableData = JSON.parse(localStorage.getItem("movieTableData"));
  movieTableData.forEach(function(movie) {
    addTableRow(movie);
  });
}
}

getPreviousData();

function inputMovie () {
  let movie = prompt("What movie would you like to search for?");
  movie = movie.trim().toLowerCase().replace(/[^a-zA-Z ]/g, "");

  if (movie != null) {
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  } else {
    alert("Please enter a movie title");
  }
// how can i make it so that if the user does not enter a movie title, the prompt will pop up again?

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
console.log(response);
addTableRow(response);
var movieTableData = [];
if(localStorage.getItem("movieTableData")) {
  movieTableData = JSON.parse(localStorage.getItem("movieTableData"));
}
movieTableData.push(response);
localStorage.setItem("movieTableData", JSON.stringify(movieTableData));
});
};

  // Create and save a reference to new empty table row
  function addTableRow(response) { 
  var tableEntry = document.createElement("tr");
  tableEntry.setAttribute("class", "table-entry");
  console.log(tableEntry);

  var titleCell = document.createElement("td");
  var titleCellText = document.createTextNode(response.Title);
  console.log(titleCellText);
  titleCell.appendChild(titleCellText);
  tableEntry.appendChild(titleCell);

  var yearCell = document.createElement("td");
  var yearCellText = document.createTextNode(response.Year);
  console.log(yearCellText);
  yearCell.appendChild(yearCellText);
  tableEntry.appendChild(yearCell);

  var actorsCell = document.createElement("td");
  var actorsCellText = document.createTextNode(response.Actors);
  console.log(actorsCellText);
  actorsCell.appendChild(actorsCellText);
  tableEntry.appendChild(actorsCell);

  movieTableBody.appendChild(tableEntry);
}

inputMovie();

// save the table input to local storage and have it persist on the page
localStorage.setItem("savedMovie", movie);

var movie = localStorage.getItem("savedMovie");
console.log(movie);

// how can i edit the code to display the saved movies in the local storage before having the prompt pop up?

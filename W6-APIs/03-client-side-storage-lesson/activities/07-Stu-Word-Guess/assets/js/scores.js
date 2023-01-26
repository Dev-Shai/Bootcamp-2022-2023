const clearButton = document.getElementById("clear");
const highscoresList = document.getElementById("highscores");

clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
localStorage.removeItem("highscores");
while (highscoresList.firstChild) {
highscoresList.removeChild(highscoresList.firstChild);
}
}

function displayHighscores() {
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
highscores.forEach(highscore => {
const li = document.createElement("li");
li.innerText = `${highscore.initials} - ${highscore.score}`;
highscoresList.appendChild(li);
});
}

displayHighscores();
const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const timeDisplay = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const highscoresList = document.getElementById("highscores");
const clearButton = document.getElementById("clear");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveScore);
clearButton.addEventListener("click", clearHighscores);

function startQuiz() {
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  choices.classList.remove("hide");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.innerText = currentQuestion.question;
  choices.innerHTML = "";
  currentQuestion.choices.forEach((choice, i) => {
    const choiceButton = document.createElement("button");
    choiceButton.innerText = choice;
    choiceButton.classList.add("choice");
    choiceButton.addEventListener("click", () => checkAnswer(choice));
    choices.appendChild(choiceButton);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    feedback.innerText = "Correct!";
    feedback.classList.remove("hide");
    score++;
  } else {
    feedback.innerText = "Incorrect!";
    feedback.classList.remove("hide");
    timeLeft -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length || timeLeft === 0) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function startTimer() {
  setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  endScreen.classList.remove("hide");
  questionTitle.classList.add("hide");
  choices.classList.add("hide");
  finalScore.innerText = score;
}

function saveScore() {
  const initials = initialsInput.value;
  const highscore = { initials, score };
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push(highscore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.href = "highscores.html";
}

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

// make timer stop when questions are done
const startButton = document.querySelector("#start");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const timeDisplay = document.querySelector("#time");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initialsInput = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const highscoresList = document.querySelector("#highscores");
const feedback = document.querySelector("#feedback");
const startScreen = document.querySelector("#start-screen");
const questionList = document.querySelector("#questions");
const correctAudio = document.querySelector("#correct-audio");
const incorrectAudio = document.querySelector("#incorrect-audio");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveScore);

function startQuiz() {
    startButton.classList.add("hide");
    questionTitle.classList.remove("hide");
    questionList.classList.remove("hide")
    choices.classList.remove("hide");
    feedback.classList.remove("hide");
    startScreen.classList.add("hide");
    startTimer();
    renderQuestions();
}

function renderQuestions() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = currentQuestion.question;
    choices.innerHTML = "";
    currentQuestion.selections.forEach((selection, i) => {
        const choiceButton = document.createElement("BUTTON");
        choiceButton.innerText = selection;
        choiceButton.classList.add("choices");
        choiceButton.addEventListener("click", () => checkAnswer(selection));
        choices.appendChild(choiceButton);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        correctAudio.play();
        feedback.innerText = "Correct!";
        score++;
    } else {
        incorrectAudio.play();
        feedback.innerText = "Incorrect!";
        timeLeft -= 10;
    };
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        renderQuestions();
    }
}

function startTimer() {
setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
    timeDisplay.innerText = "Time's Up!";
    endQuiz();
    }
    else if (currentQuestionIndex === questions.length) {
        timeDisplay.innerText = "You've finished the quiz!";
        endQuiz();
    } else {
    timeDisplay.innerText = timeLeft;
    }
}, 1000);
}


function endQuiz() {
endScreen.classList.remove("hide");
questionTitle.classList.add("hide");
choices.classList.add("hide");
finalScore.innerText = score;
feedback.classList.add("hide");
}

function saveScore() {
const initials = initialsInput.value;
const highscore = { initials, score };
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
highscores.push(highscore);
localStorage.setItem("highscores", JSON.stringify(highscores));
window.location.href = "highscores.html";
}
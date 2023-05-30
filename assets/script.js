var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
// add answerbuttonElements to button1 ,button 2 from html
var answerButtonOne = document.getElementById("button-one");
var answerButtonTwo = document.getElementById("button-two");
var answerButtonThree = document.getElementById("button-three");
var answerButtonFour = document.getElementById("button-four");
var initalBox = document.getElementById("inital-box");
// let shuffledQuestions, currentQuestionIndex
var quizTimer = document.getElementById("quiz-timer");
var containerElement = document.getElementById("container");

var currentQuestionIndex = 0;
var chosenQuestion = "";
var timer;
var timerCount;
// Questions that the quiz is going to ask
// added properties to the var questions
// var questions = {
//     questionOne: "what is blahblahblah",
//     questionTwo: "why is coding so hard?",
//     questionThree: "what is a boolean value?",
//     questionFour: "what is an object in js?"
// }
// // added properties to the answers variable
// var answers = {
//     answerOne: "Nonsense",
//     answerTwo: "There's a learning curve to everything",
//     answerThree: "It's a true or false value",
//     answerFour: "An object can be everything"
// }
// var firstQuestion = {
//     question: "what is blahblahblah",
//     choices: ["Nonsense", "facts", "qerfbfh", "deijhbed"],
//     answers: "Nonsense"
// }

var questions = [
  {
    question: "What does JavaScript add?",
    choices: ["logic", "style", "structure", "all of the above"],
    answers: "logic",
  },
  {
    question: "Can you add HTML elements through JavaScript?",
    choices: ["yes", "no", "maybe", "so"],
    answers: "yes",
  },
  {
    question: "Arrays in JavaScript can be used to store what?",
    choices: ["Boolean", "Integers", "strings", "all the above"],
    answers: "All of the above",
  },
  {
    question: "What can an object be in JavaScript?",
    choices: ["strings", "boolean", "variables", "all of the above"],
    answers: "All of the above",
  },
];

// How can i bundle multiple pieces of data together that isn't an array
// week 3 activity 21-22ish
// DOM manipulation, activities 1-10

// Linked the start button from HTML to the JS code
var startButton = document.getElementById("start-button");

// Added an event listener to begin when the start button is clicked
startButton.addEventListener("click", beginGame);

// Hid the start button once it was clicked, need to show the next Button
function beginGame() {
  console.log("let the game begin");
  startButton.classList.add("hide");
  // use this to determine the question and answer
  // currentQuestionIndex = 0;
  timerCount = 60;
  runTimer();
  // I want a question to appear in the form
  // questionElement.textContent = questions[currentQuestionIndex].question;
  // // console.log (answerButtonElement);
  // answerButtonOne.textContent = questions[currentQuestionIndex].choices[0];
  // answerButtonTwo.textContent = questions[currentQuestionIndex].choices[1];
  // answerButtonThree.textContent = questions[currentQuestionIndex].choices[2];
  // answerButtonFour.textContent = questions[currentQuestionIndex].choices[3];
 renderQuestion();
}

function checkAnswer(event) {
  console.log(event.target.textContent);
  if (event.target.textContent !== questions[currentQuestionIndex].answers) {
    timerCount -= 15;
    if (timerCount < 0) {
      timerCount = 0;
      quizTimer.textContent = timerCount;
    }
  }
  timerCount.textContent = timer;
  // Check if the event.target.textcontent = questions[currentQuestionIndex].answers
  // event.target.textContent = questions[currentQuestionIndex].answers;
  // if (timerCount <= 0) {
    //   endGame();
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endGame()
    }
    
    else {
    renderQuestion();
    }

  // answerButtonOne.addEventListener("click", checkAnswer);
  // answerButtonTwo.addEventListener("click", checkAnswer);
  // answerButtonThree.addEventListener("click", checkAnswer);
  // answerButtonFour.addEventListener("click", checkAnswer);
}

function endGame() {
  console.log("lose game");

  var gameOverH1 = document.createElement("h1");
  gameOverH1.textContent = "Game Over!";
  containerElement.appendChild(gameOverH1);
  clearInterval(timer);
  document.getElementById("inital-box").style.display = 'block';

}
function startTimer() {
  timerCount--;
  quizTimer.textContent = timerCount;
  if (timerCount === 0) {
    // if the timer reaches 0 you lost
    clearInterval(timer);
    endGame();
  }
}
function runTimer() {
  timer = setInterval(startTimer, 1000);
}

function renderQuestion() {
  questionElement.innerHTML = "";
  var currentQuestion = questions[currentQuestionIndex];
  var questionTitle = document.createElement("h1");
  questionTitle.textContent = currentQuestion.question;
  questionElement.appendChild(questionTitle);
  answerButtons.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var answer = currentQuestion.choices[i];
    var answerButtonElement = document.createElement("button");
    answerButtonElement.textContent = answer;
    answerButtonElement.addEventListener ('click', checkAnswer);
    answerButtons.appendChild(answerButtonElement);
   
  }
}

//   showQuestion(shuffledQuestions[currentQuestionIndex]);

function showQuestion(question) {
  questionElement.innerText = question.question;
}

function selectCorrectAnswer() {}

// When timer hits 0 end the game
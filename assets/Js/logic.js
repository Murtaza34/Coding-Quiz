// ------------------ Grabbing Elements from html  ------------------ //
var displayTimer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");
var questionsContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var feedback = document.getElementById("feedback");

// console.log(timeCounter.previousSibling.textContent);
// console.log(timeCounter.innerHTML);

// ================ Quiz Questions & Answers ================ //
var quizArray = [
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["a", "link", "href", "url"],
    answer: "a",
  },
  {
    question: "In CSS, what property is used to change the background color of an element?",
    options: ["color", "background", "bgColor", "background-color"],
    answer: "background-color",
  },
  {
    question: "What is the correct syntax for declaring a variable in JavaScript?",
    options: [
      "var variableName;",
      "let variableName;",
      "const variableName;",
      "variable variableName;",
    ],
    answer: "let variableName;",
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "textColor"],
    answer: "color",
  },
  {
    question: "In JavaScript, what is the difference between let and var?",
    options: [
      "var is only used in for loops, let is used everywhere else.",
      "let is block-scoped, var is function-scoped.",
      "let is used in new versions of JavaScript, var is outdated.",
      "var is used to declare constants, let is used to declare variables.",
    ],
    answer: "let is block-scoped, var is function-scoped.",
  },
  {
    question: "Which of the following is not a type of loop in JavaScript?",
    options: ["for", "while", "repeat", "do-while"],
    answer: "repeat",
  },
  {
    question: "Which method is used to remove the last element of an array in JavaScript?",
    options: ["pop()", "shift()", "slice()", "splice()"],
    answer: "pop()",
  },
  {
    question: "What is the keyword used to define an object in JavaScript?",
    options: ["object", "{}", "new", "class"],
    answer: "{}",
  },
];

let timeLeft = 121;
let score = 0;

// ================== Functions ================== //

// ------------- Start Quiz ------------ //
function startQuiz() {
  startScreen.classList.add("hide");
  questionsContainer.classList.remove("hide");
  startTimer();
  ShowQuestions();
}

// ---------------- Start timer --------------- //
function startTimer() {
  var timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      displayTimer.innerHTML = timeLeft;
    } else {
      clearInterval(timer);
      console.log("Times Up!");
    }
  }, 1000);
}

// -------------- Show Questions -------------- //
// create variable to get a random question from the quizArray
var currentQuestion = quizArray[Math.floor(Math.random() * quizArray.length)];
var currentAnswer = currentQuestion.answer;
var selectedOption;
var questionIndex = 0;

// Clearing the previous options
// using a for loop to to check the number of options, then create a button for each option
// .addEventListener to
function ShowQuestions() {
  questionTitle.innerHTML = currentQuestion.question;
  choices.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    let option = document.createElement("button");
    option.innerHTML = currentQuestion.options[i];
    option.addEventListener("click", function () {
      selectedOption = this.innerHTML;
      checkAnswer(this);
    });
    choices.appendChild(option);
  }
}

// Checking if the user has selected the correct answer
function checkAnswer(element) {
  if (selectedOption === currentAnswer) {
    score++;
    feedback.classList.remove("hide");
    feedback.innerHTML = "Correct!";
    element.setAttribute("style", "background-color:#06b66c");
  } else {
    timeLeft -= 10;
    feedback.classList.remove("hide");
    feedback.innerHTML = "Nope!";
    element.setAttribute("style", "background-color:#d4142a");
  }
}

// ================ Event Listener ================ //

startButton.addEventListener("click", startQuiz);

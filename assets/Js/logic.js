// ------------------ Grabbing Elements from html  ------------------ //
let displayTimer = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionsContainer = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let initials = document.getElementById("initials");
let submitButton = document.getElementById("submit");

// console.log(timeCounter.previousSibling.textContent);
// console.log(timeCounter.innerHTML);

// ------------ On Default ----------- //
const duration = 11;
let score = 0;

// -------------------- Quiz Questions & Answers  ---------------- //
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

// ------------- Start Quiz ------------ //
function startQuiz() {
  startScreen.classList.add("hide");
  questionsContainer.classList.remove("hide");
  startTimer();
  ShowQuestions();
}

startButton.addEventListener("click", startQuiz);

// ---------------- Start timer --------------- //
function startTimer() {
  let timeLeft = duration;
  let timer = setInterval(() => {
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
var currentQuestion = Math.floor(Math.random() * quizArray.length);
// create variable to get a random question from the array
// Clearing the previous options
// using a for loop to to check the number of options, then create a button for each option
function ShowQuestions() {
  questionTitle.innerHTML = quizArray[currentQuestion].question;
  choices.innerHTML = "";
  for (let i = 0; i < quizArray[currentQuestion].options.length; i++) {
    let option = document.createElement("button");
    option.innerHTML = quizArray[currentQuestion].options[i];
    choices.appendChild(option);
  }
}

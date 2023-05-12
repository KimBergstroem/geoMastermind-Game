// Rule PopUp Window on Front Page //
function openPopup() {
    // Get the popup element
    var popup = document.getElementById("popup");
    
    // Remove the "hidden" class to show the popup
    popup.classList.remove("hidden");
  }
  
  function closePopup() {
    // Get the popup element
    var popup = document.getElementById("popup");
    
    // Add the "hidden" class to hide the popup
    popup.classList.add("hidden");
  }

  // Game Page //
  function showQuiz() {
    let mainWrapper = document.getElementById("main-wrapper");
    let quizWrapper = document.getElementById("quiz-wrapper");
  
    mainWrapper.classList.add("hidden");
    quizWrapper.classList.remove("hidden");
  }
  
  // Questions / Answers //
const questions = [
  {
    question: "In wich country is this picture from?",
    answers: [
      { text: "Paris", correct: false},
      { text: "London", correct: false},
      { text: "Sweden", correct: true},
      { text: "Italy", correct: false},
    ]
  },
  {
    question: "What type of color have Swedish flag?",
    answers: [
      { text: "blue, yellow", correct: true},
      { text: "green, red", correct: false},
      { text: "blue, green", correct: false},
      { text: "white, red and blue", correct: false},
    ]
  },
  {
    question: "What is the name of Egypts sea?",
    answers: [
      { text: "redsea", correct: true},
      { text: "saltsea", correct: false},
      { text: "watersea", correct: false},
      { text: "oceansea", correct: false},
    ]
  }
];

/* Game dashboard content */
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  /* Added the current question and display it to the html page */
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    /* Added the answer text in the array to the buttons in the html page */
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
    });
}

startQuiz();
 


  // Score Dashboard Page //

  
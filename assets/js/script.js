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
    answer: [
      { text: "Paris", correct: false},
      { text: "London", correct: false},
      { text: "Sweden", correct: true},
      { text: "Italy", correct: false},
    ]
  },
  {
    question: "What type of color have Swedish flag?",
    answer: [
      { text: "blue, yellow", correct: true},
      { text: "green, red", correct: false},
      { text: "blue, green", correct: false},
      { text: "white, red and blue", correct: false},
    ]
  },
  {
    question: "What is the name of Egypts sea?",
    answer: [
      { text: "redsea", correct: true},
      { text: "saltsea", correct: false},
      { text: "watersea", correct: false},
      { text: "oceansea", correct: false},
    ]
  }
]

/* Game dashboard content */
const questionElement = documentgetElementById("question");
const answerButton = documentgetElementById("answer-button");
const nextButton = documentgetElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

}

  // Score Dashboard Page //

  
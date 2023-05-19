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

  // Game Page 
const mainWrapper = document.getElementById("main-wrapper");
const quizWrapper = document.getElementById("quiz-wrapper");
const backHome = document.getElementById("back-btn");
const image = document.getElementById("quiz-image");

  function showQuiz() {
    mainWrapper.classList.add("hidden");
    quizWrapper.classList.remove("hidden");
  }

  function backToMain() {
    mainWrapper.classList.remove("hidden");
    quizWrapper.classList.add("hidden");
  }
  
  // Questions / Answers 
const questions = [
  {
    image: "<img src='assets/images/quiz/pyramid.svg'>",
    question: "Where can you find this buildings?", // Question 1
    answers: [
      { text: "Mexico", correct: false},
      { text: "Marocco", correct: false},
      { text: "Egypt", correct: true}, // Correct Answer
      { text: "Iraq", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/eiffelTower.svg'>",
    question: "In wich city is this statue?", // Question 2
    answers: [
      { text: "Paris", correct: true}, // Correct Answer
      { text: "Rome", correct: false},
      { text: "New York", correct: false},
      { text: "Tokyo", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/sagradaFamilia.svg'>",
    question: "Were can you find this church?", // Question 3
    answers: [
      { text: "Barcelona, Spain", correct: true}, // Correct Answer
      { text: "Venice, Italy", correct: false},
      { text: "Lisbon, Portugal", correct: false},
      { text: "Aten, Greece", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/statueOfLiberty.svg'>",
    question: "Were is this building?", // Question 4
    answers: [
      { text: "Toronto", correct: false},
      { text: "New York", correct: true}, // Correct Answer
      { text: "Dalas", correct: false},
      { text: "Singapore", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/burjKhalifa.svg'>",
    question: "What city is this?", // Question 5
    answers: [
      { text: "Abu Dhabi", correct: false}, 
      { text: "New York", correct: false},
      { text: "Dubai", correct: true}, // Correct Answer
      { text: "Marrakech", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/portugal.svg'>",
    question: "Were can you find this cave?", // Question 6
    answers: [
      { text: "Portugal", correct: true}, // Correct Answer
      { text: "Thailand", correct: false},
      { text: "Singapore", correct: false},
      { text: "Australia", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/singapore.svg'>",
    question: "Were is this?", // Question 7
    answers: [
      { text: "Tokyo", correct: false},
      { text: "Thailand", correct: false},
      { text: "Indonesia", correct: false}, 
      { text: "Singapore", correct: true}, // Correct Answer
    ]
  },
  {
    image: "<img src='assets/images/quiz/indonesia.svg'>",
    question: "In what Country can you find this temple?", // Question 8
    answers: [
      { text: "Mexico", correct: false},
      { text: "Thailand", correct: false},
      { text: "Malaysia", correct: false}, 
      { text: "Indonesia", correct: true}, // Correct Answer
    ]
  },
  {
    image: "<img src='assets/images/quiz/greenLight.svg'>",
    question: "This sky can you find in which country?", // Question 9
    answers: [
      { text: "Nordwegian", correct: true}, // Correct Answer
      { text: "Denmark", correct: false},
      { text: "Latvia", correct: false},
      { text: "Amsterdam", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/greece.svg'>",
    question: "Wich island is this?", // Question 10
    answers: [
      { text: "Santorini, Greece", correct: true}, // Correct Answer
      { text: "Crete, Greece", correct: false},
      { text: "Ibiza, Spain", correct: false},
      { text: "Ischia, Italy", correct: false},
    ]
  }
];

/* GAME DASHBOARD CONTENT */
const questionElement = document.getElementById("question");
const questionElement2 = document.getElementById("question-of");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  backButton.innerHTML = "Back";
  showQuestion();
}

function showQuestion(){ 
  resetState();
  // Adds the current question and display it to the html page 
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;
  questionElement2.innerHTML = questionNumber + " of 10 Questions";

  // Set the image source
  image.innerHTML = currentQuestion.image;
  image.classList.add("quiz-image");

    // Added the answer text in the array to the buttons in the html page 
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("quiz-btn");
      answerButtons.appendChild(button);
      if(answer.correct){ // .Correct from the array 
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
  nextButton.style.display = "none";
  backButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
  questionElement2.innerHTML = '';
}

function selectAnswer(event){ // Checking if the answer is correct or incorrect 
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++; // If the answer is correct, add 1+ to the score
  }else{
    selectedBtn.classList.add("incorrect");
  }
  // Checks if one of the .correct answer in the array having the "true value" and then adds correct statement if it is true" 
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true; // Cant click on any other buttons
  });
  nextButton.style.display = "block"; // This is so the Next button shows up so we can go to next question
}

function showScore(){
  resetState(); 
   // The character "`" (backtick) is used in this code snippet to define a template literal or a template string in JavaScript.  Becomes more readable and easier to work with. 
    if (score === 10){
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}! You are a  true GEO PRO!`;
    }else if (score <=5){
      questionElement.innerHTML = `You scored ${score} out of ${questions.length} Are you even trying?`;
    }else{
      questionElement.innerHTML = `You scored ${score} out of ${questions.length} Better luck next time!`;
    }
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  backHome.style.display = "block";
  backHome.addEventListener("click", backToMain);
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
      handleNextButton();
  }else{
    startQuiz();
  }
})

function handleNextButton(){ // What happens if user clicks on Next Button 
  currentQuestionIndex++;// Will increase the index in the array 
  if(currentQuestionIndex < questions.length){ 
    showQuestion(); // Display Next Question if there is another questions index 
  }else{
    showScore(); // Display Score, this is the end of the game, as there is no more question in the array to loop for 
  }
}

startQuiz();
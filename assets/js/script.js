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
    question: "helpå me iwth thiethi", // Question 1
    answers: [
      { text: "Paris", correct: false},
      { text: "London", correct: false},
      { text: "Sweden", correct: true}, // Correct Answer
      { text: "Italy", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/geoMasterdtfmind (360 × 640px).png'>",
    question: "In wich city is this statue?", // Question 2
    answers: [
      { text: "New York", correct: true}, // Correct Answer
      { text: "Washington", correct: false},
      { text: "Toronto", correct: false},
      { text: "Dalas", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/geoMasterdtfmind (360 × 640px).png'>",
    question: "Were can you find this animal?", // Question 3
    answers: [
      { text: "Sweden", correct: true}, // Correct Answer
      { text: "Norweigan", correct: false},
      { text: "Finland", correct: false},
      { text: "Iceland", correct: false},
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "Were is this picture taken from?", // Question 4
    answers: [
      { text: "Turkey", correct: false},
      { text: "Spain", correct: true}, // Correct Answer
      { text: "Portugal", correct: false},
      { text: "Greece", correct: false},
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "What place can you find this building?", // Question 5
    answers: [
      { text: "Paris", correct: false}, 
      { text: "London", correct: false},
      { text: "Sweden", correct: true}, // Correct Answer
      { text: "Denmark", correct: false},
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "Where is this picture taken from?", // Question 6
    answers: [
      { text: "New Zeeland", correct: true}, // Correct Answer
      { text: "Indonesia", correct: false},
      { text: "Thailand", correct: false},
      { text: "Japan", correct: false},
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "This game is from wich country?", // Question 7
    answers: [
      { text: "Japan", correct: false},
      { text: "Kina", correct: false},
      { text: "USA", correct: false}, 
      { text: "Sweden", correct: true}, // Correct Answer
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "What is the name of Egypts sea?", // Question 8
    answers: [
      { text: "redsea", correct: false},
      { text: "saltsea", correct: false},
      { text: "watersea", correct: false}, 
      { text: "oceansea", correct: true}, // Correct Answer
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "Were can you find this mountain?", // Question 9
    answers: [
      { text: "Brazil", correct: true}, // Correct Answer
      { text: "Mexico", correct: false},
      { text: "Sweden", correct: false},
      { text: "Italy", correct: false},
    ]
  },
  {
    image: "assets/images/questionImages/pyramids.svg",
    question: "Random question hehe", // Question 10
    answers: [
      { text: "Random1", correct: true}, // Correct Answer
      { text: "random", correct: false},
      { text: "random", correct: false},
      { text: "random", correct: false},
    ]
  }
];

/* GAME DASHBOARD CONTENT */
const questionElement = document.getElementById("question");
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
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;  // The character "`" (backtick) is used in this code snippet to define a template literal or a template string in JavaScript.  Becomes more readable and easier to work with. 
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
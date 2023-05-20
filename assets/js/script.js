/**
 * ########################################################################################
 * ############################# POPUP BOX WITH RULES #####################################
 * ########################################################################################.
 */

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

/**
 * ########################################################################################
 * ############################## QUIZ GAME DASHBOARD #####################################
 * ########################################################################################.
 */

// Variable declarations for DOM elements
const mainWrapper = document.getElementById("main-wrapper"); // Represents the main wrapper element
const quizWrapper = document.getElementById("quiz-wrapper"); // Represents the quiz wrapper element
const image = document.getElementById("quiz-image"); // Represents the image element within the quiz

const questionElement = document.getElementById("question"); // Represents the question within the quiz
const questionCounter = document.getElementById("question-counter"); // Represents the question counter within the quiz
const questionTimer = quizWrapper.querySelector(".timer .timer-sec"); // Represents the time the user have on each question in the quiz
const answerButtons = document.getElementById("answer-buttons"); // Represents the container for answer buttons
const nextButton = document.getElementById("next-btn"); // Represents the next button element to take user to next question
const backButton = document.getElementById("back-btn"); // Represents the back button element to take user back to mainWrapper

// Variable declarations for quiz tracking
let currentQuestionIndex = 0; // Keeps track of the current question index
let score = 0; // Stores the score accumulated by the user
let counter;
let timeValue = 10;

  function showQuiz() {
    mainWrapper.classList.add("hidden");
    quizWrapper.classList.remove("hidden");
  }

  function backToMain() {
    mainWrapper.classList.remove("hidden");
    quizWrapper.classList.add("hidden");
  }
  
/**
 * Represents an array of quiz questions, their associated images, and answer options.
 * Each question object contains the question text, image, and an array of answer options.
 * The correct answer option for each question is marked with the property `correct: true`.
 */
const questions = [
  {
    image: "<img src='assets/images/quiz/pyramid.svg' alt='Pyramid'>",
    question: "Where can you find this buildings?", // Question 1
    answers: [
      { text: "Mexico", correct: false},
      { text: "Marocco", correct: false},
      { text: "Egypt", correct: true}, // Correct Answer
      { text: "Iraq", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/eiffelTower.svg' alt='Eiffel tower'>",
    question: "In wich city is this statue?", // Question 2
    answers: [
      { text: "Paris", correct: true}, // Correct Answer
      { text: "Rome", correct: false},
      { text: "New York", correct: false},
      { text: "Tokyo", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/sagradaFamilia.svg' alt='Sagrada Familia'>",
    question: "Were can you find this church?", // Question 3
    answers: [
      { text: "Barcelona, Spain", correct: true}, // Correct Answer
      { text: "Venice, Italy", correct: false},
      { text: "Lisbon, Portugal", correct: false},
      { text: "Aten, Greece", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/statueOfLiberty.svg' alt='Statue of liberty'>",
    question: "Were is this building?", // Question 4
    answers: [
      { text: "Toronto", correct: false},
      { text: "New York", correct: true}, // Correct Answer
      { text: "Dalas", correct: false},
      { text: "Singapore", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/burjKhalifa.svg' alt='Burj Khalifa'>",
    question: "What city is this?", // Question 5
    answers: [
      { text: "Abu Dhabi", correct: false}, 
      { text: "New York", correct: false},
      { text: "Dubai", correct: true}, // Correct Answer
      { text: "Marrakech", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/portugal.svg' alt='Famous cave in Algarve cost'>",
    question: "Were can you find this cave?", // Question 6
    answers: [
      { text: "Portugal", correct: true}, // Correct Answer
      { text: "Thailand", correct: false},
      { text: "Singapore", correct: false},
      { text: "Australia", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/singapore.svg' alt='Marina Bay Sands'>",
    question: "Were is this?", // Question 7
    answers: [
      { text: "Tokyo", correct: false},
      { text: "Thailand", correct: false},
      { text: "Indonesia", correct: false}, 
      { text: "Singapore", correct: true}, // Correct Answer
    ]
  },
  {
    image: "<img src='assets/images/quiz/indonesia.svg' alt='Sewu Temple'>",
    question: "In what Country can you find this temple?", // Question 8
    answers: [
      { text: "Mexico", correct: false},
      { text: "Thailand", correct: false},
      { text: "Malaysia", correct: false}, 
      { text: "Indonesia", correct: true}, // Correct Answer
    ]
  },
  {
    image: "<img src='assets/images/quiz/greenLight.svg' alt='Green sky light'>",
    question: "This sky can you find in which country?", // Question 9
    answers: [
      { text: "Nordwegian", correct: true}, // Correct Answer
      { text: "Denmark", correct: false},
      { text: "Latvia", correct: false},
      { text: "Amsterdam", correct: false},
    ]
  },
  {
    image: "<img src='assets/images/quiz/greece.svg' alt='White and blue buildings on a island'>",
    question: "Wich island is this?", // Question 10
    answers: [
      { text: "Santorini, Greece", correct: true}, // Correct Answer
      { text: "Crete, Greece", correct: false},
      { text: "Ibiza, Spain", correct: false},
      { text: "Ischia, Italy", correct: false},
    ]
  }
];

function startQuiz(){
  currentQuestionIndex = 0; // Reset the current question index to the beginning
  score = 0; // Reset the score to 0
  startTimer(10);
  nextButton.innerHTML = "Next"; // Set the innerHTML of the Next button to "Next"
  backButton.innerHTML = "Back"; // Set the innerHTML of the Back button to "Back"
  showQuestion(); // Display the first question
}

function showQuestion(){ 
  resetState();
  // Retrieves the current question and its corresponding question number, then updates the HTML elements to display them
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;
  questionCounter.innerHTML = questionNumber + " of 10 Questions";

  // Set the image source
  image.innerHTML = currentQuestion.image;
  image.classList.add("quiz-image");

    // Populate answer buttons with answer text from the array
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

startQuiz(); // Initializes the quiz by resetting the question index and score

function selectAnswer(event){ // Handles the selection of an answer
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  clearInterval(counter);

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; // Increment the score by 1 if the answer is correct
  } else {
    selectedBtn.classList.add("incorrect");
  }
  
  // Marks correct answers and disables all buttons
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Disable all buttons to prevent further selection
  });

  nextButton.style.display = "block"; // Display the Next button for moving to the next question
}

function showScore(){
  resetState(); 
   // The character "`" (backtick) is used in this code snippet to define a template literal or a template string in JavaScript.  Becomes more readable and easier to work with. 
    if (score === 10){
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}! <br> You are a  true GEO PRO!`;
    }else if (score <=5){
      questionElement.innerHTML = `You scored ${score} out of ${questions.length} <br> Are you even trying?`;
    }else{
      questionElement.innerHTML = `You scored ${score} out of ${questions.length} <br> Better luck next time!`;
    }
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  backButton.style.display = "block";
  backButton.addEventListener("click", backToMain);
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // Move to the next question if there are more questions
  } else {
    startQuiz(); // Start the quiz again if all questions have been answered
  }
});

function handleNextButton(){ // Handles the click on the Next Button
  currentQuestionIndex++; // Increase the index to move to the next question in the array
  if (currentQuestionIndex < questions.length) { 
    showQuestion(); // Display the next question if there are more questions in the array
    clearInterval(counter);
    startTimer(timeValue);
  } else {
    showScore(); // Display the final score if there are no more questions in the array
  }
}

function startTimer(time){
  counter = setInterval(timer, 1000); 
  function timer(){
    questionTimer.textContent = time; // Updates the content of the 'questionTimer' element with the current 'time' value
    time--; // Decreases the 'time' value by 1 for the next iteration
    if (time <= 5 && time >= 3){
      questionTimer.style.color = "yellow"; // Color Yellow
    }else if (time < 4 && time >= 0){
      questionTimer.style.color = "red"; // Color Red
    }else if (time < 0){
      clearInterval(counter); // Stops the recurring timer
      questionTimer.textContent = "0"; // Updates the content of 'questionTimer' to "0" when 'time' reaches negative values
      handleNextButton(); // Calls the 'handleNextButton' function to automatically move to the next question
    }else{
      questionTimer.style.color = "green"; // Color Green
    }
  }
}


// Reset function
function resetState(){
  nextButton.style.display = "none";
  backButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
  questionCounter.innerHTML = '';
}
// main.js

import { initializeQuiz } from "./quiz.js";
import { updateNameList, saveNamesToLocalStorage } from "./scoreboard.js";
import { initializePopup } from './popup.js';

// Call the initializeQuiz function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeQuiz);

document.addEventListener("DOMContentLoaded", updateNameList, saveNamesToLocalStorage);

// Call the imported function to initialize the popup functionality
document.addEventListener("DOMContentLoaded", initializePopup);

// Use the imported functions as needed in your code
// For example:
document.getElementById("add-score-button").addEventListener("click", addScore);

// main.js

import { initializeQuiz } from "./quiz.js";
import { updateNameList, resetScoreboard, saveNamesToLocalStorage, currentTime } from "./scoreboard.js";
import { initializePopup } from './popup.js';

// Call the initializeQuiz function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeQuiz);

// Call the functions in scoreboard.js when the DOM is loaded
document.addEventListener("DOMContentLoaded", updateNameList, resetScoreboard, saveNamesToLocalStorage, currentTime);

// Call the imported function to initialize the popup functionality
document.addEventListener("DOMContentLoaded", initializePopup);

document.getElementById("add-score-button").addEventListener("click", addScore);

// popup.js

export function initializePopup() {
  
// Variable declarations for DOM elements
const popup = document.getElementById("popup");
const showButton = document.getElementById("show-btn");
const returnButton = document.querySelector(".return-btn");

showButton.addEventListener("click", () => popup.classList.remove("hidden")); // EventListener to the show Button to open up Rules Popup page
returnButton.addEventListener("click", () => popup.classList.add("hidden")); // EventListener to the return Button to close the popup page with rules

}
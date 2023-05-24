// popup.js

export function initializePopup() {

    // Variable declarations for DOM elements
    const popup = document.getElementById("popup");
    const showButton = document.getElementById("show-btn");
    const returnButton = document.getElementById("return-btn");
  
    showButton.addEventListener("click", () => popup.classList.remove("hidden"));
    returnButton.addEventListener("click", () => popup.classList.add("hidden"));

  }
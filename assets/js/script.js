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
  





  // Score Dashboard Page //

  
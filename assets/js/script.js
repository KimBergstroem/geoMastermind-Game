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

  document.getElementById("buttonStart").addEventListener("click", displayQuiz);

  function displayQuiz(){
      let mainWrapper = document.getElementById("main-wrapper");
  
      // set the hidden attribute to true to hide the main-wrapper
      mainWrapper.hidden = true;
  }



  // Score Dashboard Page //

  
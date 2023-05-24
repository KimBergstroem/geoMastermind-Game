let scoreboard = [];
  
export function addScore() {
  const username = document.getElementById("username-input").value;
  const scored =  showScore();
  // Retrieve the score from the game

  // Add the username and score to the scoreboard array
  scoreboard.push({ scored, name: username });

  // Save the updated scoreboard array in localStorage
  localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

  // Update the scoreboard display
  updateScoreboard();
}

export function updateScoreboard() {
  const scoreboardContainer = document.getElementById("scoreboard");

  // Clear the existing scoreboard display
  scoreboardContainer.innerHTML = "";

  // Retrieve the scoreboard array from localStorage
  if (localStorage.getItem("scoreboard")) {
    scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
  }

  // Sort the scoreboard based on the scores

  // Display the scoreboard
  scoreboard.forEach((entry, index) => {
    const row = document.createElement("div");
    row.textContent = `Username: ${entry.name}, Score: ${entry.scored}`;
    scoreboardContainer.appendChild(row);
  });
}

// Call the updateScoreboard() function initially to load the scoreboard
updateScoreboard();


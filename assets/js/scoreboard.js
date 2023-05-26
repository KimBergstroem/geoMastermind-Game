// scoreboard.js

// Retrieve names from Local Storage or initialize an empty array
const usernameArray = JSON.parse(localStorage.getItem("names")) || [];

const usernameForm = document.getElementById("nameForm");
const usernameInput = document.getElementById("nameInput");
const usernameList = document.getElementById("nameList");

usernameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = usernameInput.value;
  const userScore = score; // Get the score from the quiz game
  const userObject = { name, score: userScore }; // Create an object with username and score
  usernameArray.push(userObject);
  usernameInput.value = "";
  updateNameList();
  saveNamesToLocalStorage(); // Save names to Local Storage
});

export function updateNameList() {
  usernameList.innerHTML = "";
  for (const user of usernameArray) {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name} - Score: ${user.score}`;
    usernameList.appendChild(listItem);
  }
}

 export function resetScoreboard() {
  localStorage.clear();
  usernameArray.length = 0; // Clear the array as well
  updateNameList();
}

export function saveNamesToLocalStorage() {
  localStorage.setItem("names", JSON.stringify(usernameArray));
}

updateNameList();

export function currentTime() { // Code copied from flexiple
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh >= 12) {
    session = "PM";
  }

  if (hh === 18 && mm === 0 && ss === 0) {
    resetScoreboard();
  }

  hh = hh > 12 ? hh - 12 : hh;
  hh = hh === 0 ? 12 : hh;
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  setTimeout(currentTime, 1000);
}
// Start the currentTime() function
currentTime();


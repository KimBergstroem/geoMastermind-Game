
// Retrieve names from Local Storage or initialize an empty array
      const nameArray = JSON.parse(localStorage.getItem("names")) || [];

      const nameForm = document.getElementById("nameForm");
      const nameInput = document.getElementById("nameInput");
      const nameList = document.getElementById("nameList");

      nameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = nameInput.value;
        nameArray.push(name);
        nameInput.value = "";
        updateNameList();
        saveNamesToLocalStorage(); // Save names to Local Storage
      });

      export function updateNameList() {
        nameList.innerHTML = "";
        for (const name of nameArray) {
          const listItem = document.createElement("li");
          listItem.textContent = name;
          nameList.appendChild(listItem);
        }
      }

      export function saveNamesToLocalStorage() {
        localStorage.setItem("names", JSON.stringify(nameArray));
      }

      // Call the initial updateNameList() function to display the names on page load
      updateNameList();
    
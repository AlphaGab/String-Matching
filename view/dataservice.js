document.getElementById("fetchButton").addEventListener("click", () => {
const inputValue = document.getElementById("textInput").value;
fetch("http://localhost:3000/match", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    value: inputValue
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
    displayData(data)
  })
  .catch(error => { 
    console.error(error);
  });
})
function displayData(data) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = JSON.stringify(data);
  }

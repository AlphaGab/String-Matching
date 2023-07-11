
document.getElementById("fetchButton").addEventListener("click", () => {
const inputValue = document.getElementById("textInput").value;
const query = document.getElementById("query").value
let api = "http://localhost:3000/match"
if(query){
  api = "http://localhost:3000/match/search"
}
fetch(api, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    value: inputValue,
    query:query
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

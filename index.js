const form = document.getElementById("newform");
const listItems = document.getElementById("taskList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("inputText");

  let listItem = document.createElement("li");
  listItem.innerHTML = inputField.value;

  document.getElementById("taskList").appendChild(listItem);
  inputField.value = "";

});

listItems.addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    event.preventDefault();
    if (!event.target.className) {
      event.target.className = "clicked";
    } else {
      event.target.className = "";
    }
  }
});

const date = new Date().toLocaleDateString();
const showDate = document.querySelectorAll(".date");
showDate.forEach((element) => (element.innerHTML = date));

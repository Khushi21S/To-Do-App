var inputList = ["eeee"];

const form = document.getElementById("newform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("inputText");
  const inputValue = inputField.value;

  inputList.push(inputValue);
  console.log(inputList);
  inputField.value = "";
});


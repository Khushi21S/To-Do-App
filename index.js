const form = document.getElementById("newform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let list = document.createElement("ul");

  const inputField = document.getElementById("inputText");

  let listItem = document.createElement("li");
  listItem = inputField.value;
  list.append(listItem);
  document.getElementById("taskList").appendChild(list);
  inputField.value = "";
});

    const date = new Date().toLocaleDateString();
    document.getElementById("date").innerHTML = date;
    document.getElementById("today").innerHTML = date;
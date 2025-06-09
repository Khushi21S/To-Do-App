const form = document.getElementById("newform");
const listItems = document.getElementById("taskList");
const onGoingTasks = document.getElementById("onGoingTasks");

//function to add a task in the list

function createTask(event, inputField, id){
  event.preventDefault();
  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.innerHTML = inputField.value ? inputField.value :inputField;
  listItem.appendChild(checkbox);

  document.getElementById(`${id}`).appendChild(listItem);
  inputField.value = "";
}

// function to add task in the listItems.
function addTask(event) {
  event.preventDefault();

  const inputField = document.getElementById("inputText");
  createTask(event, inputField, "taskList");
}



//function to add task to any list
function addTaskToAnyList(event, addFromList, addToList ){
  const selectedTasks = Array.from(addFromList.childNodes);
  selectedTasks.forEach((element) => {
    const node = element.querySelector('input[type = "checkbox"]');
      if(node && node.checked){
         createTask(event, element.innerText, `${addToList}`);
         element.remove(); 
         //listItems.removeChild(element) this can also be used
      }
  });
}

//function to remove tasks from tasklist and add to onGoingTasks

function addTasktoOngoingTasks(event){
  addTaskToAnyList(event, listItems, "onGoingTasks");
}

//function to remove tasks from onGoingTasks and add to completed task
function addTasktoCompletedTasks(event){
  addTaskToAnyList(event, onGoingTasks, "completedTasks")
}

//adding event listener to move Button to Ongoing task
const moveButtonToOngoingTask = document.getElementById("button1");
moveButtonToOngoingTask.addEventListener("click", addTasktoOngoingTasks);

//adding event listener to move button to Completed task
const moveButtonToCompletedTask = document.getElementById("button3")
moveButtonToCompletedTask.addEventListener("click", addTasktoCompletedTasks);



//adding event listener to form to submit task
form.addEventListener("submit", addTask);

//function to add strikethrough to the list items.
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

//showing current date
const date = new Date().toLocaleDateString();
const showDate = document.querySelectorAll(".date");
showDate.forEach((element) => (element.innerHTML = date));

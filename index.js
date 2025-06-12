const form = document.getElementById("newform");
const listItems = document.getElementById("taskList");
const onGoingTasks = document.getElementById("onGoingTasks");
const completedTasks = document.getElementById("completedTasks");
const getPriority = document.getElementById("selectPriority");

function selectPriority() {
  const priorityOptions = getPriority.querySelectorAll("option");
  let selectedPriority = priorityOptions[0];
  priorityOptions.forEach((item) => {
    if (item.selected) {
      selectedPriority = item;
    }
  });
  return selectedPriority;
}

function giveTag(priority, item) {
  if (priority.innerText == "Low") {
    item.classList.add("lowTask");
  } else if (priority.innerText == "Medium") {
    item.classList.add("mediumTask");
  } else {
    item.classList.add("highTask");
  }
}

//function to add a task in the list

function createTask(event, inputField, id) {
  event.preventDefault();
  if (inputField == "" || inputField.value == "") {
    alert("Please enter the Task name");
    return;
  }
  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.innerHTML = inputField.value ? inputField.value : inputField;
  listItem.appendChild(checkbox);
  const priority = selectPriority();
  giveTag(priority, listItem);
  document.getElementById(`${id}`).appendChild(listItem);
  inputField.value = "";
}

// function to add task in the listItems.
function addTask(event) {
  event.preventDefault();
  const inputField = document.getElementById("inputText");
  createTask(event, inputField, "taskList");
}

//function to delete task

function deleteTask(list) {
  const selectedTasks = Array.from(list.childNodes);
  const checkedTasks = [];
  selectedTasks.forEach((element) => {
    const node = element.querySelector('input[type="checkbox"]');
    if (node && node.checked) {
      checkedTasks.push(element.innerText);
      element.remove();
    }
  });
  if (checkedTasks.length == 0) alert("Please select a task");
}

function deleteTaskFromTaskList() {
  deleteTask(listItems);
}

function deleteTaskFromCompletedList() {
  deleteTask(completedTasks);
}

//function to remove check from the tasks
function removeChecks(addToList){
  const tasks = document.getElementById(`${addToList}`);
  const selectedTasks = tasks.childNodes;
  selectedTasks.forEach((item) => {
    const node = item.querySelector('input[type = "checkbox"]');
    node.checked = false;
  })
  
}

//function to add task to any list
function addTaskToAnyList(event, addFromList, addToList) {
  const selectedTasks = Array.from(addFromList.childNodes);
  const checkedTasks = [];
  selectedTasks.forEach((element) => {
    const node = element.querySelector('input[type = "checkbox"]');
    if (node && node.checked) {
      checkedTasks.push(element.innerText);
      document.getElementById(`${addToList}`).appendChild(element);
    }
  });
  if (checkedTasks.length == 0) alert("Please select a task first");
 removeChecks(addToList);
}


//adding event listener to form to submit task
form.addEventListener("submit", addTask);

//function to remove tasks from tasklist and add to onGoingTasks

function addTasktoOngoingTasks(event) {
  addTaskToAnyList(event, listItems, "onGoingTasks");
}

//function to remove tasks from onGoingTasks and add to completed task
function addTasktoCompletedTasks(event) {
  addTaskToAnyList(event, onGoingTasks, "completedTasks");
}

//adding event listener to move Button to Ongoing task
const moveButtonToOngoingTask = document.getElementById("button1");
moveButtonToOngoingTask.addEventListener("click", addTasktoOngoingTasks);

//adding event listener to move button to Completed task
const moveButtonToCompletedTask = document.getElementById("button3");
moveButtonToCompletedTask.addEventListener("click", addTasktoCompletedTasks);

//adding event listener to remove task from listItems
const deleteButtonFromTaskList = document.getElementById("button2");
deleteButtonFromTaskList.addEventListener("click", deleteTaskFromTaskList);

//adding event listener to remove task from completedTask
const deleteButtonFromCompletedTask = document.getElementById("button4");
deleteButtonFromCompletedTask.addEventListener(
  "click",
  deleteTaskFromCompletedList
);

//function to add strikethrough to the list items.
// listItems.addEventListener("click", function (event) {
//   if (event.target.tagName == "LI") {
//     event.preventDefault();
//     if (!event.target.className) {
//       event.target.className = "clicked";
//     } else {
//       event.target.className = "";
//     }
//   }
// });

//showing current date
const date = new Date().toLocaleDateString();
const showDate = document.querySelectorAll(".date");
showDate.forEach((element) => (element.innerHTML = date));

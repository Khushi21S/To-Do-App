const form = document.getElementById("newform");
const listItems = document.getElementById("taskList");

//function to add a task in the list
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("inputText");

  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.innerHTML = inputField.value;
  listItem.appendChild(checkbox);

  document.getElementById("taskList").appendChild(listItem);
  inputField.value = "";

});



  


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
  let onGoingTaskList = [];
  listItems.childNodes.forEach((element) =>{
    const node = element.childNodes[1]; 
    if(node.nodeName == "INPUT" && node.type =="checkbox"){
      if(node.checked){
        onGoingTaskList.push(element.innerText);
        console.log(onGoingTaskList);
        
      } else{
        console.log("no");
        
      }
    }
  });
    
});




//showing current date
const date = new Date().toLocaleDateString();
const showDate = document.querySelectorAll(".date");
showDate.forEach((element) => (element.innerHTML = date));

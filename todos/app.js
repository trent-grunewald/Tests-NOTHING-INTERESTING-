//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners(); 

function loadEventListeners() {
  //DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task Event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

//Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fas fa-eraser"></i>';
    //Append the link to the li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  })
}

//Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  //Create task li
  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //Create and append text node
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fas fa-eraser"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear Input
  taskInput.value = '';
  e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Remove task?')){
    e.target.parentElement.parentElement.remove();

    //Remove task from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//remove from LS Func
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task){
      tasks.splice(index, 1)
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(e) {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //Use Query Selector to return values from a node list,  getElement would require us to convert to an array
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

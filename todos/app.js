//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task Event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks
  filter.addEventListener('keyUp', filterTasks);
}

//Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  //Create task li
  const li = docuemnt.createElement('li');
  //add a class
  li.className = 'collection-item';
  //Create and append text node
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove></i>';
  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = '';
  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Remove task?')){
    e.target.parentElement.parentElement.remove();
    }
  }
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

  //Query Selector returns a node list
  document.querySelectorAll('collection-item').forEach();
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}
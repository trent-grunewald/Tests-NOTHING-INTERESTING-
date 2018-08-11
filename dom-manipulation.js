//BY ID
console.log(document.getElementById('task-title'));

const taskTitle = document.getElementById('task-title');

//CHANGE STYLE
//usually used during an event / dynamic functionality
taskTitle.style.background = "green";
taskTitle.style.color = "white";
taskTitle.style.padding = "5px";

//CHANGE CONTENT
taskTitle.textContent = "task ListI";
taskTitle.innerText = "MY TASKS";
taskTitle.innerHTML = "<span syle='color:red'>TRENTS LIST</span>";


//QUERY SELECTOR 
//more powerful, can use any CSS selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
//more specific
document.querySelector('ul li').style.color = 'red';
//Specific LI
document.querySelector('li:last-child').style.fontWeight = 'bold';
//SPECIFIC LI
document.querySelector('li:nth-Child(3)').style.color = 'orange';
//BY ID
// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// //-----------------------------------------------------------------CHANGE STYLE


// //usually used during an event / dynamic functionality
// taskTitle.style.background = "green";
// taskTitle.style.color = "white";
// taskTitle.style.padding = "5px";

// //----------------------------------------------------------------CHANGE CONTENT


// taskTitle.textContent = "task ListI";
// taskTitle.innerText = "MY TASKS";
// taskTitle.innerHTML = "<span syle='color:red'>TRENTS LIST</span>";


// // -------------------------------------------------------------QUERY SELECTOR 


// //more powerful, can use any CSS selector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// //more specific
// document.querySelector('ul li').style.color = 'red';
// //Specific LI
// document.querySelector('li:last-child').style.fontWeight = 'bold';
// //SPECIFIC LI
// document.querySelector('li:nth-Child(3)').style.color = 'orange';
// document.querySelector('li:nth-Child(3)').textContent = 'HEYOOOooooo';

// -----------------------------------------------------------MULTIPLE ELEMENTS


// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// //ACCESSING SPLECIFIC ITEM IN CLASS
// items[0].style.color = 'blue';
// items[3].textContent = 'I am test!';


// //SPECIFIC ELEMENT BY CLASS
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');


//BY TAG NAME
let lis = document.getElementsByTagName('li');
// console.log(lis);


//CONVERT HTML COLLECTION INTO AN ARRAY
lis = Array.from(lis);

//Reverse Array
lis.reverse();

//FOR EACH - This logs all class names, changes text, and gives index positions(Reversed since the above)
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);
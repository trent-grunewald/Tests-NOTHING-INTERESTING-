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
// let lis = document.getElementsByTagName('li');
// // console.log(lis);


// //CONVERT HTML COLLECTION INTO AN ARRAY
// lis = Array.from(lis);

// //Reverse Array
// lis.reverse();

// //FOR EACH - This logs all class names, changes text, and gives index positions(Reversed since the above)
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);


// -------------------------------------------------------QUERY SELECTOR ALL----


//doesn't require you to turn it into an array
// const items = document.querySelectorAll('li');
// //does the same as the above function, in less code
// items.forEach(function(item, index){
//   item.textContent = `${index}: hello`;
// })

// //targets the odd and even LI's
// const liOdd = document.querySelectorAll('li:nth-child(odd');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// //changes the background of every odd list item
// liOdd.forEach(function(li, index) {
//   li.style.background = "pink";
// })

// //changes the background of every even list item
// liEven.forEach(function(li){
//   li.style.background = "gray";
//   li.style.color = 'white';
// })
// //or you can do it with a for loop
// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background='yellow';
// }
  

// console.log(items);


// ------------------------------------------------------------TRAVERSING THE DOM


let val;

//COLLECTION IS THE UL CLASS, SO EVERY LI INSIDE WILL BE RETURNED. 
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
//get ChildNodes (NODE LIST)
val = list.childNodes;
//get Children (Just the html collection) WILL BE USED MOSTLY
val = list.children;
val = list.children[2].textContent = "TESTY";

//get children of children
val = list.children[3].children;

//first child
val = list.firstChild;
//This one is better.
val = list.firstElementChild;

//last child
val = list.lastChild;
//Better form
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;

//get parent of parent.
val = listItem.parentElement.parentElement;

//get next siblings
val = listItem.nextSibling;
//better 
val = listItem.nextElementSibling;

//get previous sibling.
val = listItem.previousSibling;
//better
val = listItem.previousElementSibling;

console.log(val);
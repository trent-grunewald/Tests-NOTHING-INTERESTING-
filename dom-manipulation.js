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


// let val;

// //COLLECTION IS THE UL CLASS, SO EVERY LI INSIDE WILL BE RETURNED. 
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// //get ChildNodes (NODE LIST)
// val = list.childNodes;
// //get Children (Just the html collection) WILL BE USED MOSTLY
// val = list.children;
// val = list.children[2].textContent = "TESTY";

// //get children of children
// val = list.children[3].children;

// //first child
// val = list.firstChild;
// //This one is better.
// val = list.firstElementChild;

// //last child
// val = list.lastChild;
// //Better form
// val = list.lastElementChild;

// //count child elements
// val = list.childElementCount;

// //get parent node
// val = listItem.parentNode;

// //get parent of parent.
// val = listItem.parentElement.parentElement;

// //get next siblings
// val = listItem.nextSibling;
// //better 
// val = listItem.nextElementSibling;

// //get previous sibling.
// val = listItem.previousSibling;
// //better
// val = listItem.previousElementSibling;

// console.log(val);


//--------------------------------------------CREATING ELEMENTS--------------


//creating an element
// const li = document.createElement('li');

// //ADDING A CLASS
// li.className = 'collection-item';

// //ADDING AN ID
// li.id = 'new-Item';

// //ADDING AN ATTRIBUTE
// li.setAttribute('title', 'New Item!');

// //ADDING TEXT
// li.innerText = 'Hello!?';

// //CREATE AND ADD CLASS AND CHILD TO LI
// const link = document.createElement('a');
// link.className = 'dleete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// //ADDS IN CREATED HTML CONTENT ABOVE NO QUOTES
// li.appendChild(link)

// //ADD LI TO THE UL
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


// --------------------------------------------------REMOVING / REPLACING ELEMENTS


//REPLACING AN ELEMENT
//create the element
// const newHeading = document.createElement('h2');
// //adding an id to it
// newHeading.id = 'task-title';
// //creates the text inside.
// newHeading.appendChild(document.createTextNode('This is Text'));

// //get old heading(the one we are replacing)
// const oldHeading = document.getElementById('task-title');
// //Parent(needed for targeting the replacement)
// const cardAction = document.querySelector('.card-action');

// //replaces the child in the parent.
// cardAction.replaceChild(newHeading, oldHeading);


// //REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const uls = document.querySelector('ul');

// const third = document.querySelector('li:nth-Child(3)').style.color = 'orange';

// // remove li;
// lis[3].remove();
// //remove child;
// uls.removeChild(lis[4]);


//CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;
// //adds a class.
// link.classList.add('test');
// val = link;
// console.log(link);


// //ADDING ATTRIBUTES
// //adds an href attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://trentgrunewald.com');
//Set attribute = .setAttribute('attribute', 'attribute value')
//Get attribute = .getAttribute('attribute', 'attribute value')
//Remove attribute = .removeAttribute('attribute', 'attribute value')


// -------------------------------------------------EVENTS LISTENERS-----------

//PREVENT DEFAULT = Prevents the button or link from performing default actions
// .preventDefault();

//click event listener
// document.querySelector('.clear-tasks').addEventListener('click', onClick);{
// }

// function onClick(e){
//   // console.log("hi")
 
//   let val;
//   val = e;
//   // e.target = Displays the buttons values.
//   // e.target.id = Displays the buttons ID.
//   // e.target.className = displays the buttons classes
//   // e.target.classList = displays a list of all the classes
//   //e.target.innerText = "hello" changes the buttons text to "Hello"
//   e.target.innerText = "hello";
//   e.preventDefault();
// };


// ----------------------------MOUSE EVENTS--------------------------


// const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //CLICK EVENT
// clearBtn.addEventListener('click', runEvent);
// //DOUBLE CLICK EVENT
// clearBtn.addEventListener('dblclick', runEvent);
// //MOUSE DOWN
// clearBtn.addEventListener('mousedown', runEvent);
// //MOUSE UP
// clearBtn.addEventListener('mouseup', runEvent);
// //Mouse ENTER
// clearBtn.addEventListener('mouseenter', runEvent);
// //MOUSE LEAVE
// clearBtn.addEventListener('mouseleave', runEvent);
// //MOUSE OUT
// clearBtn.addEventListener('mouseout', runEvent);
// //MOUSE OVER
// clearBtn.addEventListener('mouseover', runEvent);
// //MOUSE MOVE

// card.addEventListener('mousemove', runEvent);


// //event handler
// function runEvent(e){
//  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`;
// }


// -----------------------------------------KEYBOARD / FORM EVENTS--------------


// const form = document.querySelector('form');
// let taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// // form.addEventListener('submit', runEvent);

// //KEYDOWN (On key down)
// taskInput.addEventListener('keydown', runEvent);
// //KEYUP (On key up)
// taskInput.addEventListener('keydup', runEvent);
// //KEYPRESS (On key press)
// taskInput.addEventListener('keypress', runEvent);
// //FOCUS - when you click inside of an input and it has focus
// taskInput.addEventListener('focus', runEvent);
// //BLUR - when you click outside of an input and it has does not have focus
// taskInput.addEventListener('blur', runEvent);
// //CUT - When a user selects "Cut" 
// taskInput.addEventListener('cut', runEvent);
// //PASTE - When a user selects "paste" 
// taskInput.addEventListener('paste', runEvent);
// //INPUT - Fires off on any input event above
// taskInput.addEventListener('input', runEvent);
// //CHANGE - Fires off on any change
// taskInput.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);
//   //TARGET IS WHAT WE ARE TYPING IN, VALUE = What we type
//   // console.log(e.target.value);
//   // //gets input value
//   // console.log(taskInput.value);
//   // //this will clear out the form
//   // taskInput.value = '';
//   // e.preventDefault();
// }


// ------------------------------------------------------EVENT BUBBLING-----


// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });


//------------------------------------------------EVENT DELEGATION------------


document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  //looks at the clicked items classes and deletes it if the class is "Delete-item"
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('Deleted');
    //removes the tasks parent element
    e.target.parentElement.parentElement.remove();
    }
  }
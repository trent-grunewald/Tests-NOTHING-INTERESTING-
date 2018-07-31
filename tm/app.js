//var, let, const 

//init var = creating a variable but not giving it a value EX- var greeting;
//used for if statements, if something is true greeting ="".

//variables can only include letters, numbers, _, and $
//variables cannot start with a number!

//const = constant - it cannot change or be reassigned (Except in arrays and Objects AND it has to be given a value when created.

//primitive data types = String, Number, Boolean, Null, Undefined, Symbols

//reference types = Arrays, Object Literals, Functions, Dates

//PRIMITIVE--------------------------------------------------
// //String--------------------------------------------------
// Const name = "Trent Grunewald";
// //Number--------------------------------------------------
// const Age = 31;
// //Boolean--------------------------------------------------
// const hasKids = false;
// //Null--------------------------------------------------
// const bike = null;
// //undefined--------------------------------------------------
// let test;
// //symbol---------------------------------------------------
// const sym = symbol();

// //REFERENCE TYPES - Objects------------------------------------
// //Array--------------------------------------------------
// Const hobbies = ['games', 'movies', 'coding'];
// //Objects Literal---------------------------------------
// const address = {
//   city: 'yakima',
//   state: 'Wa'
// }
// //Date--------------------------------------------------
// const today = new Date();


// ---------------------------------------------------------------CONVERTING TO STRING / NUMBER


// let val; //<-- variable initialisation

// //NUMBER TO STRING--------------------------------------------------
// val = String(7);
// //OR
// // val = (7).toString();
// //BOOLEAN TO STRING--------------------------------------------------
// val = String(true);
// //OR
// // val = (true).toString();
// //DATE TO STRING--------------------------------------------------
// val = String(new Date());
// //OR
// // val = (new Date()).toString();
// //ARRAY TO STRING--------------------------------------------------
// val = String([1, 2, 3, 4]);
// //OR
// // val = ([1, 2, 3, 4]).toString();

// // STRING TO A NUMBER
// val = Number('7'); //returns 7
// val = Number(true); //returns 1
// val = Number(false); //returns 0
// val = Number(null); //returns 0
// val = Number('hello'); //returns NaN, same with array and Method

// val = parseInt('100.30'); // Only returns the 100
// val = parseFloat('100.31'); // returns 100.31

// //Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);//only works on strings
// console.log(val.toFixed());//specifies decimals


// ---------------------------------------------------------------MATH OPERATORS-----------


// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2; // Gives the leftover amount of divided amount

// val = Math.PI; // pi
// val = Math.E; //eulers number
// val = Math.round(2.8);//rounds the value in the () to the nearest whole number.
// val = Math.ceil(2.4); // always rounds up (Will be 3)
// val = Math.floor(2.8) // always rounds down. (Will be 2)
// val = Math.sqrt(64) // gives the square root (8)
// val = Math.abs(-5) // gives the absolue version (5)
// val = Math.pow(8, 2); // gives the power of 8 to the second
// val = Math.min(11,7,4,2,9) //gives the minimum number
// val = Math.max(11,7,4,2,9) //gives the maximum number
// val = Math.random(); // gives a random number with decimals
// val = Math.floor(Math.random() * 20 + 1);//use the number at the end for your maximum number wanted the +1 to get to 20 and the .floor to remove the decimals.

// console.log(val);


// ---------------------------------------------------------------STRING OPERATORS-----------


// const firstName = 'trentr';
// const lastName = 'Grunewald';
// const age = 31;
// const str = "Web Design, Web Development, Javascript, Vue"

// //Concatent
// let val = firstName + " " + lastName; // THE + " " + IS CONCATINATION!!!
// val = "Hi, I am " + firstName + " " + lastName + " and I will be a Web Developer at " + age;

// //concat()
// val = firstName.concat(" ", lastName);

// //Append
// val = "Trent ";
// val += "Grunewald"; //the += is the appendage 


// //Escaping
// val = 'That\'s awesome, I can\'t wait' //the \ is the escape, it prevents the single quote from ending the quotation, but, you could just use double quotes as the wrapper

// //Change case
// val = firstName.toUpperCase(); //converts to uppercase.
// val = firstName.toLowerCase(); // converts to lowercase.

// //indexOf()
// val = firstName.indexOf('t');
// val = firstName.lastIndexOf('t'); //finds the index of the LAST "t"

// //charAt()
// val = firstName.charAt("2");//returns the character at "2";
// //Get Last Character
// val = firstName.charAt(firstName.length - 1);//will return the last character of the variable.
// //substring()
// val = firstName.substring(0,4);//will only return the first 4 characters
// //slice()
// val = firstName.slice(-3);//starts from the back and returns the last 3.
// //split()
// val = str.split(',')//splits into an array based on what is quoted, in this case , 

// //replace()
// val = str.replace("Vue", "React");//replaces Vue with React CAPITALIZATION SENSITIVE

// //includes()
// val = str.includes("Web")//checks if the word "Web" is in the variable and returns a boolean.

// console.log(val);


// -----------------------------------------------------------TEMPLATE LITERALS------


// const firstName = 'trentr';
// const lastName = 'Grunewald';
// const job = "Web Development";
// const age = "31";
// const city = "Yakima";
// let html;

// //template strings
// // the top ` is NOT A SINGLE QUOTE... It is above the top left tab key
// html = `
//         <ul>
//           <li>Name: ${firstName}</li>
//           <li>Last: ${lastName}</li>
//           <li>Job: ${job}</li>
//           <li>city: ${city}</li>
//           <li>${2 + 2 }</li>
//           <li>${age > 30 ? 'over 30' : "under 30"}</li>
//         </ul>
// `;


// document.body.innerHTML = html;


// -------------------------------------------------ARRAYS------

// const numbers = [43, 65, 23, 42, 35,67];
// const numbers2 = ["hi", "bye", "sign out", "login"];

// let val;

// //get Array Length
// val = numbers.length;
// //check if it is an array
// val = Array.isArray(numbers);//checks if the array is a number, string, etc.
// //get single value from the array
// val = numbers[3];
// //change something to the array[2] is the place I want to change
// numbers[2] = 7;
// //find index value;
// val = numbers.indexOf(67);
// //adding to the end of the array
// numbers.push(777)
// //add to front
// numbers.unshift(77);
// //remove from the end;
// numbers.pop();
// //remove from front
// numbers.shift();
// //remove from index
// numbers.splice(0,1)//has to include start and end location
// //reverse array
// numbers.reverse();
// //concat arrays
// val = numbers.concat(numbers2);
// //sorting an array
// val = numbers2.sort();
// //order array by numbers
// val = numbers.sort(function(x, y){
//   return x - y;
// })
// // ----------------------------------------
// //reverse Sort (highest first)
// val = numbers.sort(function(x, y){
//   return y - x;
// })
// // ---------------------------------------
// //find under specific number
// function under50(num){
//   return num < 50;
// }
// val = numbers.find(under50);
// // ---------------------------------------

// -------------------------------------------------------------------------OBJECT LITERALS-------


// const person = {
//   firstName: 'Trent',
//   lastName: 'Grunewald',
//   age: 31,
//   birthYear: function(){
//     return 2018 - this.age;
//   },
//   career: 'Web Development',
//   address: {
//     city:'Yakima',
//     state: 'Washington'
//   },
//   hobbies: ['games', 'horror movies', 'code']
// }

// let val;
// val = person

// //Get specific Value
// val = person.career;
// //get a specific value from an object
// val = person.address.state;
// //get a specific value from an array
// val = person.hobbies[1];
// //return a function
// val = person.birthYear();

// console.log(val);

// -------------------------------------------------------

// const people = [
//   {name: 'john', age: 30},
//   {name: 'trent', age: 31},
//   {name: 'mike', age: 51}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }


// -----------------------------------------------------------------------DATE AND TIME------------


// let val;

// //automatically creates todays date
// const today = new Date();
// //allows the user to put the date in
// let birthday = new Date('9-1-1987 7:13:03 am');
// //a simpler style of date
// let date= new Date('3/5/1421');

// //get Month by number (They start at 0)
// val = today.getMonth();
// //get month / day number
// val = today.getDate();
// //get day by weekday (number based)
// val = today.getDay();
// //get year
// val = today.getFullYear();
// //get time-stamp (Amount of time passed since January 1st)
// val = today.getTime();
// //changes the birthday month (This means user data should be LET, so they can be changed)
// birthday.setMonth(1);
// //changes the birthday date (This means user data should be LET, so they can be changed)
// birthday.setDate(13);
// //changes the birthday month (This means user data should be LET, so they can be changed)
// birthday.setMonth(1);


// console.log(birthday);


// -----------------------------------------------------------------IF STATEMENTS------------

// const color = 'black';
const id = 101;

// //Equal To
// if(id == 100){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// //NOT Equal To
// if(id != 100){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// === tests value and type
// !== Tests "NOT EQUAL TO" value and type

//Check if Variable is defined or not
// if (typeof id !== "undefined") {
//   console.log(`the ID is ${id}`);
// } else {
//   console.log("The ID is undefined")
// }

//GREATER OR LESS THAN
// if (id > 200) {
//   console.log("incorrect");
// } else {
//   console.log("correct";)
// }

//IF ELSE
// if(color === 'red'){
//   console.log("color is red");
// }else if(color === 'black'){
//   console.log("color is black");
// }else{
//   console.log("color is not red or black")
// }

//LOGICAL OPERATORS
const name = 'Trent';
const age = '31';

// if(age > 17 && age > 21){
//   console.log(`${name} has full access`);
// }else if(age >= 17 && age < 21){
//   console.log(`${name} has access to tobacco`);
// }else{
//   console.log(`Please leave ${name}`);
// }

// OR ||
// if(age !== 31 || name !== "Trent"){
//   console.log(`${name} who are you?`);
// }else{
//   console.log(`welcome ${name}`)
// }

//TERNARY OPERATOR
// ? is the "IF", the first output is what happens if true, the second is if it is false.
// console.log(id === 101 ? 'correct': 'Incorrect')


// ---------------------------------------------------------------SWITCH STATMENTS

// //Use when you have a LOT of different cases, better than "ELSE IF"
// const color = "black";

// switch(color){
//   case 'red':
//   console.log("color is red");
//   break;
//   case 'green':
//   console.log("color is green");
//   break;
//   case 'black':
//   console.log("the color is black");
//   break;
//   default:
//   console.log("color is magical");
//   break;
// }

// let day;
// switch(new Date().getDay()){
//   case 0:
//   day = "Sunday";
//   break;
//   case 1:
//   day = "Monday";
//   break;
//   case 2:
//   day = "Tuesday";
//   break;
//   case 3:
//   day = "Wednesday";
//   break;
//   case 4:
//   day = "Thursday";
//   break;
//   case 5:
//   day = "Friday";
//   break;
//   case 6:
//   day = "Saturday";
//   break;
// }
// console.log(`Today is ${day}`)

// -------------------------------------------------------------FUNCTIONS------------------------


//Function Declaration
// the = in the Paramater is what will be used as a default
// function greet(firstName = "John", lastName = "Doe"){
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet());

// //FUNCTION EXPRESSION
// //"= 7" will be used as a default
// const square = function(x = 7){
//   return x*x
// };

// console.log(square(10));

// //IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS --- IIFEs
// //Arguements go in the bottom brackets
// (function(name){
//   console.log(name + " ran the IFFE..");
// })('Trent');

// //PROPERTY METHODS --- METHODS ARE FUNCTIONS INSIDE OBJECTS
// const todo = {
//   add: function(){
//     console.log('Add Todo...');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.add();
// todo.edit(12);
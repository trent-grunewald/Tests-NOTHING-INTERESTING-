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


const firstName = 'trent';
const lastName = 'Grunewald';
const age = 31;

//Concatent
let val = firstName + " " + lastName; // THE + " " + IS CONCATINATION!!!
val = "Hi, I am " + firstName + " " + lastName + " and I will be a Web Developer at " + age;

//concat()
val = firstName.concat(" ", lastName);

//Append
val = "Trent ";
val += "Grunewald"; //the += is the appendage 


//Escaping
val = 'That\'s awesome, I can\'t wait' //the \ is the escape, it prevents the single quote from ending the quotation, but, you could just use double quotes as the wrapper

//Change case
val = firstName.toUpperCase(); //converts to uppercase.
val = firstName.toLowerCase(); // converts to lowercase.

//indexOf()
val = firstName.indexOf('t');
val = firstName.lastIndexOf('t'); //finds the index of the LAST t

console.log(val);
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

console.log(val);

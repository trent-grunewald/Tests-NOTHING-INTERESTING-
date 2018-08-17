// //Object Literal
// const person = {
//   name: 'Trent',
//   age: 31,
// }

// //Constructor -Start capitalized
// //date has to be capitalized
// function Alien(name, age, birthday) {
//   this.name = name;
//   this.birthday = new Date(birthday);
//   this.age = birthday;
// }

// const trent = new Alien('Trent', 30, '02/01/1987');
// const rachel = new Alien('Rachel', 33, '11/23/1985');

// console.log(trent, rachel);


// -------------------------------------------PROTOTYPES---------------------------


//Each object has a prototype and a prototype is an object itself.

// function Alien(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   // this.calculateAge = function() {
//   //   const diff = Date.now() - this.dob.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// const trent = new Alien("Trent", "Grunewald", '02/01/1987')

// //Calculate Age
// Alien.prototype.calculateAge = function() {
//   const diff = Date.now() - this.dob.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// //Get full name
// Alien.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// //Name Change
// Alien.prototype.getsMaried = function(newLastName) {
//   this.lastName = newLastName;
// }

// //Verify it has a property
// console.log(trent.hasOwnProperty('firstName'));

// console.log(trent.calculateAge())
// console.log(trent.getFullName());
// trent.getsMaried('johnson');
// console.log(trent.getFullName());


// -----------------------------------------------PROTOTYPE INHERITANCE------------


function Alien(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Alien.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const alien1 = new Alien('Ven','Zu');

console.log(alien1.greeting());
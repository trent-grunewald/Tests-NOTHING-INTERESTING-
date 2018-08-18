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


// ----------------------------------------ES5-PROTOTYPES---------------------------


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


// -------------------------------------------ES5--PROTOTYPE INHERITANCE------------


// function Alien(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Alien.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const alien1 = new Alien('Ven','Zu');
// console.log(alien1.greeting());

// //CUSTOMER CONSTRUCTOR

// function Customer(firstName, lastName, phone, membership) {
//   //CALL allows us to reference another function in the current context
//   Alien.call(this, firstName, lastName);
//     //After referencing what you want from the other, create your constructor as normal.
//   this.phone = phone;
//   this.membership = membership;
// }

//   //Inherit the Alien prototype methods - Allows us to use the 'Alien.prototype greeting' with the Customer prototype
//   Customer.prototype = Object.create(Alien.prototype);
//   //Make customer .prototype return Customer(), instead of Alien();
//   Customer.prototype.constructor = Customer;
  

//   const customer1 = new Customer('Tommy', 'Tommasino', '555-555-5555', 'bronze');
//   console.log(customer1);

//   //Customer greeting
//   Customer.prototype.greeting = function(){
//     return `YOU SUCK ${this.firstName}`;
//   }

//   console.log(customer1.greeting());


// --------------------------------------------------ES5--CREATING OBJECTS--------


// const alienPrototypes = {
//   greeting: function(){
//     return `Hello there earthling known as ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const trent = Object.create(alienPrototypes);
// trent.firstName = 'Trent';
// trent.lastName = 'Grunewald';
// console.log(trent.greeting();

// const tom = Object.create(alienPrototypes, {
//   firstName: {value: 'Tom'},
//   lastName: {value: 'Tommerson'},
// });


// ---------------------------------------------------------ES6 CLASSES------------

////ALL CLASSES START WITH CAPITAL LETTERS
// class Alien {
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//   greeting() {
//     return `Hello light traveler ${this.firstName} ${this.lastName}`;
//   }
//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }
//   //USE STATICS IF IT IS GOING TO BE A STANDALONE FUNCTION / METHOD IN YOUR CLASS THAT DOESN'T USE "THIS"
//   static add(x, y) {
//     return x + y;
//   } 
// }

// const zu = new Alien('Zu', 'Azziri', '12-12-1912');

// zu.getsMarried('Her');

// console.log(zu.greeting());

// //Static return
// console.log(Alien.add(3,2));


// --------------------------------------------ES6 INHERITANCE / SUB-CLASS----------


// class Person {
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

//   class Customer extends Person {
//     constructor(firstName, lastName, phone, membership) {
//       //SUPER is used for getting from the parent class, in this case "Person"
//       super(firstName, lastName);
//       //Define new parameters for the child class after SUPER
//       this.phone = phone;
//       this.membership = membership;
//     }

//     static getMembershipCost(){
//       return 500;
//     }
//   }

//   const john = new Customer ('John', 'Lynch', '509-555-5555', 'Gold');
// //Able to use the Person Class Greeting since Customer is a child/extended... NOT able to use Customer functions for Person
//   console.log(john.greeting();
//   console.log(Customer.getMembershipCost());
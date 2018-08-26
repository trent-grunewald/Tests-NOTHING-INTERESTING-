//ARROW FUNCTION VERSION BELOW "sayHello();"
const sayHello = function() {
  console.log('Hello')
};
sayHello();


//Remove "Function" word and replace with "=>"
const arrow = () => {
  console.log("ARROW!")
};
arrow();


//ONE LINE FUNCTION DOES NOT NEED {}
const arrow2 = () => console.log("This is Test");
arrow2();

//RETURN A STRING
const arrow3 = () => "String returned";
console.log(arrow3());

//OBJECT RETURN
const arrowObject = () => ({Name: "This is object"});
console.log(arrowObject());

//RETURN PARAMETERS - SINGLE PARAMS DO NOT NEED ()
const arrowHello = name => console.log(`"hello ${name}`)
arrowHello("Trent, you can do this");

//CALLBACKS
//ARROW VERSION BELOW THIS REGULAR VERSION
// const users = ['tom','jim','rick'];
// const nameLengths = users.map(function(name){
//   return name.length;
// });
// console.log(nameLengths);

const users = ['tom','jim','rick'];
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
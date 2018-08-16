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

//String Constructor (DO NOT USE)

const name1 = 'jeff';
const name2 = new String('jeff');

console.log(typeof name2);

if(name1 === 'jeff'){
  console.log('yes');
}else{
  console.log('no');
}
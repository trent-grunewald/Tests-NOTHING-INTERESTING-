//Object Literal
const person = {
  name: 'Trent',
  age: 31,
}

//Constructor -Start capitalized
//date has to be capitalized
function Alien(name, age, birthday) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(birthday);
}

const trent = new Alien('Trent', 30, '02/01/1987');
const rachel = new Alien('Rachel', 33, '11/23/1985');

console.log(trent, rachel);
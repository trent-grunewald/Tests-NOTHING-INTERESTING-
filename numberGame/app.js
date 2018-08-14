//Game Values
let min = 1,
    max = 10,
    winningNum = 7,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum){
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = 'green';
    //Set message
    setMessage(`${winningNum} is correct!`, 'green');

  } else {
//wrong number
guessesLeft -= 1;

if(guessesLeft === 0){
  //Game Over
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = 'red';
  //set message
  setMessage(`${winningNum} was the number, LOSER`, 'red');
} else {
  //Game Continues - answer wrong
    }
  }
});

//set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
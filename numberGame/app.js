//Game Values
let min = 1,
    max = 2,
    WinningNum = 7,
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
  if(guess === WinningNum){
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = 'green';
  } else {

  }
})

//set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
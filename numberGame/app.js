//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

//Restart event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum){
  gameOver(true, `${winningNum} is correct!`);

  } else {
//wrong number
guessesLeft -= 1;

if(guessesLeft === 0){
 gameOver(false, `${winningNum} was the number, LOSER`);
} else {

  //change border color
  guessInput.style.borderColor = 'red'; 

  //clear input
  guessInput.value = '';

  //Game Continues - answer wrong
  setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
});

//gameover
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //disable input
  guessInput.disabled = true;
  //change border
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  //Restart
  guessBtn.value = "Play again?";
  guessBtn.className += 'play-again';
}

//Winning Number
function getRandomNum(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
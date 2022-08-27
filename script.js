'use strict';

/*******************************************
/* VARIABLES & FUNCTIONS
/*******************************************/

// ** generate random secret number between 1 and 20 using Math() .random and .trunc functions and assign to variable **
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// ** variable to keep track of player's score (in code, not DOM) *
let score = 20;

// ** variable to keep track of high score **
let highscore = 0;

// ** function to display messages **
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

/*******************************************
/* GAME LOGIC
/*******************************************/

// ** enter player's guess on clicking [Check!] button **
document.querySelector('.check').addEventListener('click', function () {
  // convert inputted string to number and store in variable
  const guess = Number(document.querySelector('.guess').value);

  // ** if no input **
  if (!guess) {
    // display no number message
    displayMessage(`⛔️ No Number!`)
  }

  // ** if not between 1 and 20 **
  if (guess < 1 || guess > 20) {
    // display no number message
    displayMessage(`⛔️ Number must be between 1 and 20!`)
  }

  // ** if player wins **
  else if (guess === secretNumber) {
    // display winning message
    displayMessage(`🏆 Correct Number!`);
    // reveal secret number 
    document.querySelector('.number').textContent = secretNumber;
    // change body background colour to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    // increase width of .number element
    document.querySelector('.number').style.width = '30rem';
    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // ** if player is wrong **
  else if (guess != secretNumber) {
    // check if player is on last attempt
    if (score > 1) {
      // check if guess is greater than secret number and display message
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      // decrease score by 1
      score--;
      // update score in the DOM
      document.querySelector('.score').textContent = score;
    }

    // ** if player loses ** 
    else {
      // display losing message
      displayMessage(`💥 You Lost the Game!`);
      // update score in the DOM
      document.querySelector('.score').textContent = 0;
      // reveal secret number 
      document.querySelector('.number').textContent = secretNumber;
      // change body background colour to red
      document.querySelector('body').style.backgroundColor = '#b30202';
      // increase width of .number element
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

/*******************************************
/* RESET VALUES
/*******************************************/

// ** reset initial values on clicking [Again!] button **
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// TASK 1
const generateTarget = secretNumber => {
    return Math.floor(Math.random() * 10)
  };
  
//console.log("Secret Number: " + generateTarget())

// TASK 2 - Comparing
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanDifference = Math.abs(humanGuess - secretNumber)
  const computerDifference = Math.abs(computerGuess - secretNumber)

    if (humanDifference === computerDifference) {
      console.log('Human Wins');  
      return true;
    } else if (humanDifference < computerDifference) {
      console.log('Human Wins');
      return true;
    } else {
      console.log('Computer Wins');
      return false;
    } 
  };


// TASK 3 - Updaet Score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};


// TASK 4 - Advance Round
const advanceRound = () => {
  currentRoundNumber += 1;
};


// TASK 5 - Test work
const secretNumber = generateTarget(5); // Assuming 5 as the secret number
console.log(compareGuesses(3, 7, secretNumber)); // Example guesses and secret number
updateScore('Computer')
updateScore('human');
advanceRound();
console.log('Current Round: ' + currentRoundNumber); // Should output 2 after advancing the round
console.log('Human Score: ' + humanScore); //
console.log('Computer Score: ' + computerScore);












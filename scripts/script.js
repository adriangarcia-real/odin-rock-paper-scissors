// Randomly choose the computer's move
function getComputerChoice() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Tally computer and player score
let computerScore = 0;
let playerScore = 0;

function tallyScore(playerWins) {
  if (playerWins) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}

// Plays a sinlge round of Rock Paper and Scissors
function playGame(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return `You both choose ${playerSelection}. It's a tie!`
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      tallyScore(true);
      return "You win! Rock beats Scissors."
    } else if (computerSelection === "paper") {
      tallyScore(false);
      return "You lose! Paper beats Rock."
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      tallyScore(true);
      return "You win! Paper beats Rock."
    } else if (computerSelection === "scissors") {
      tallyScore(false);
      return "You lose! Scissors beats Paper."
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      tallyScore(true);
      return "You win! Scissors beats Paper"
    } else if (computerSelection === "rock") {
      tallyScore(false);
      return "You lose! Rock beats Scissors."
    }
  }

}

function game() {
  // Play 5 rounds of Rock Paper Scissors
  for (let i = 1; i <= 5; i++) {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();

    if (!(computerOptions.includes(playerSelection))) {
      i -= 1;
      console.log("Please choose Rock Paper or Scissors");
    } else {
      console.log(playGame(playerSelection, computerSelection));
    }
  }


  if (playerScore === computerScore) {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). It's a tie!`
  } else if (playerScore > computerScore) {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). You win!`
  } else {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). You lose!`
  }
}

console.log(game())



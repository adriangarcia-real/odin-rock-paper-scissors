let computerScore = 0;
let playerScore = 0;

function incrementScore(playerWins) {
  if (playerWins) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}

function compareScore() {
  if (playerScore === computerScore) {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). It's a tie!`
  } else if (playerScore > computerScore) {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). You win!`
  } else {
    return `You got ${playerScore} point(s). Computer got ${computerScore} point(s). You lose!`
  }
}

function getComputerChoice() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playGame(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        incrementScore(true);
        return "You win! Rock beats Scissors."
      } else if (computerSelection === "paper") {
        incrementScore(false);
        return "You lose! Paper beats Rock."
      } else {
        return `It's a tie! You both chose ${playerSelection}.`
      }
    case "paper":
      if (computerSelection === "rock") {
        incrementScore(true);
        return "You win! Paper beats Rock."
      } else if (computerSelection === "scissors") {
        incrementScore(false);
        return "You lose! Scissors beats Paper."
      } else {
        return `It's a tie! You both chose ${playerSelection}.`
      }
    case "scissors":
      if (computerSelection === "paper") {
        incrementScore(true);
        return "You win! Scissors beats Paper"
      } else if (computerSelection === "rock") {
        incrementScore(false);
        return "You lose! Rock beats Scissors."
      } else {
        return `It's a tie! You both chose ${playerSelection}.`
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

  return compareScore()
}



console.log(game())



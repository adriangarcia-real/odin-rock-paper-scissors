// Randomly choose the computer's move
function getComputerChoice() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Plays a sinlge round of Rock Paper and Scissors
function playGame() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  computerSelection = getComputerChoice();
  playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();

  if (playerSelection === computerSelection) {
    return `You both choose ${playerSelection}. It's a tie!`
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats Scissors."
    } else if (computerSelection === "paper") {
      return "You lose! Paper beats Rock."
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats Rock."
    } else if (computerSelection === "scissors") {
      return "You lose! Scissors beats Paper."
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win! Scissors beats Paper"
    } else if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors."
    }
  }

  if (!(computerOptions.includes(playerSelection))) {
    return "Please choose Rock Paper or Scissors."
  }
}

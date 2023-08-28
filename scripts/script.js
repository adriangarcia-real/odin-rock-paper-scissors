let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayRoundResult(playGame(button.id));
  });
});

function incrementScore(playerWins) {
  if (playerWins) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }

  updateScore();
  announceWinner();
}

function updateScore() {
  const playerScorePara = document.getElementById("player-score");
  const computerScorePara = document.getElementById("computer-score");

  playerScorePara.textContent = `Player Score: ${playerScore}`;
  computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

function displayRoundResult(result) {
  const roundResult = document.getElementById("round-result");

  roundResult.textContent = result;
}

function announceWinner() {
  const results = document.getElementById("results");
  const gameResult = document.createElement("p");
  if (playerScore === 5) {
    gameResult.textContent = "Game over. You win!";
  } else if (computerScore === 5) {
    gameResult.textContent = "Game over. You lose!";
  }

  results.appendChild(gameResult);
}

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return "Please choose between rock, paper, or scissors.";
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        incrementScore(true);
        return "You win! Rock beats Scissors.";
      } else if (computerSelection === "paper") {
        incrementScore(false);
        return "You lose! Paper beats Rock.";
      } else {
        return `It's a tie! You both chose ${playerSelection}.`;
      }
    case "paper":
      if (computerSelection === "rock") {
        incrementScore(true);
        return "You win! Paper beats Rock.";
      } else if (computerSelection === "scissors") {
        incrementScore(false);
        return "You lose! Scissors beats Paper.";
      } else {
        return `It's a tie! You both chose ${playerSelection}.`;
      }
    case "scissors":
      if (computerSelection === "paper") {
        incrementScore(true);
        return "You win! Scissors beats Paper";
      } else if (computerSelection === "rock") {
        incrementScore(false);
        return "You lose! Rock beats Scissors.";
      } else {
        return `It's a tie! You both chose ${playerSelection}.`;
      }
  }
}

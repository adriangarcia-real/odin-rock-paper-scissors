let computerScore = 0;
let playerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!gameOver) {
      displayRoundResult(playGame(button.id));
      checkGameOver();
    }
  });
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScore();
  document.getElementById("round-result").textContent = "";
  document.querySelector(".game-result").remove();
  document.querySelector(".try-again").remove();
}

function incrementScore(playerWins) {
  if (playerWins) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }

  updateScore();
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

function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;
    const results = document.getElementById("results");
    const gameResult = document.createElement("p");
    gameResult.classList.add("game-result");
    gameResult.textContent = gameOver
      ? `Game over. You ${playerScore === 5 ? "win" : "lose"}!`
      : "";
    gameResult.style.color = gameOver
      ? `${playerScore === 5 ? "green" : "red"}`
      : "";
    results.appendChild(gameResult);

    const tryAgainButton = document.createElement("button");
    tryAgainButton.textContent = "Try Again!";
    tryAgainButton.addEventListener("click", resetGame);
    tryAgainButton.classList.add("try-again");
    results.appendChild(tryAgainButton);
  }
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

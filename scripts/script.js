// Randomly choose the computer's move
function getComputerChoice() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

console.log(getComputerChoice())

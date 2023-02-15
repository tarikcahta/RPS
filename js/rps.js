const options = ["rock", "paper", "scissors"];

const paperBtn = document.getElementById("paperBtn");
const rockBtn = document.getElementById("rockBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const restartBtn = document.getElementById("restartBtn");
const scoreBoardText = document.getElementById("rounds");

const playerChoice = document.getElementById("playerChoice");
const machineChoice = document.getElementById("machineChoice");

const playerResult = document.getElementById("playerResult");
const compResult = document.getElementById("compResult");

paperBtn.addEventListener("click", () => handleClick("paper"));
rockBtn.addEventListener("click", () => handleClick("rock"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
restartBtn.addEventListener("click", () => closeRestartPanel());

let playerScore = 0;
let computerScore = 0;
let roundWin = "";

function computerPlay() {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWin = "Tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    roundWin = "player";
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    roundWin = "machine";
  }
}

function updateScore() {
  playerResult.innerText = `${playerScore}`;
  compResult.innerText = `${computerScore}`;
}

function updateScoreBoardText() {
  if (roundWin === "Tie!") {
    scoreBoardText.innerText = `It's a tie!`;
  } else if (roundWin === "player" && playerScore == 5) {
    scoreBoardText.innerText = "You have WON!";
  } else if (roundWin === "player") {
    scoreBoardText.innerText = `You got the machine!`;
  } else if (roundWin === "machine" && computerScore == 5) {
    scoreBoardText.innerText = "You have LOST!";
  } else if (roundWin === "machine") {
    scoreBoardText.innerText = `Machine got you!`;
  }

  updateScore();

  let declaredWinner = document.querySelector(".declaredWinner");
  if (playerScore === 5) {
    declaredWinner.innerText = `Player has won the Game! One more?`;
    openRestartPanel();
  } else if (computerScore === 5) {
    declaredWinner.innerText = "Machine has won the Game!?! Retry?";
    openRestartPanel();
  }
}

function openRestartPanel() {
  let popUp = document.getElementById("restartSpan");

  popUp.classList.add("open-restartSpan");
}

function closeRestartPanel() {
  let popUp = document.getElementById("restartSpan");

  playerScore = 0;
  computerScore = 0;
  popUp.classList.remove("open-restartSpan");
  scoreBoardText.innerText = "The Game is about to begin";
  updateScore();
}

function updateChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerChoice.textContent = `✊`;
      break;
    case "paper":
      playerChoice.textContent = "✋";
      break;
    case "scissors":
      playerChoice.textContent = "✌";
      break;
  }

  switch (computerSelection) {
    case "rock":
      machineChoice.textContent = `✊`;
      break;
    case "paper":
      machineChoice.textContent = "✋";
      break;
    case "scissors":
      machineChoice.textContent = "✌";
      break;
  }
}

function handleClick(playerSelection) {
  let computerSelection = computerPlay();

  playRound(playerSelection, computerSelection);
  updateChoice(playerSelection, computerSelection);
  updateScoreBoardText(roundWin, playerSelection, computerSelection);
}

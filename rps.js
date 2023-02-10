const options = ["rock", "paper", "scissors"];

function computerPlay() {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function theGame() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt("Enter you poison : ");
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
  alert(winCondition());
}

console.log(playRound(playerSelection, computerSelection));
console.log(theGame());

// let msg = playRound(playerSelection, computerSelection);
//   console.log(msg);
//   if (humanScore < 5 && computerScore < 5) {
//     console.log('Current score: Human: ', humanScore, ' Computer: ', computerScore)
//     setTimeout(initializeGame, 0);
//   } else {
//     console.log(win_condition());
//   }
// }

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        console.log("YOU have won!");
        playerScore += 1;
      } else if (playerSelection == computerSelection) {
        console.log("It's a tie");
      } else {
        console.log("The Machine has won!");
        computerScore += 1;
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        console.log("YOU have won!");
        playerScore += 1;
      } else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
      } else {
        console.log("The Machine has won!");
        computerScore += 1;
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        console.log("YOU have won!");
        playerScore += 1;
      } else if (playerSelection == computerSelection) {
        console.log("It's a tie!!!");
      } else {
        console.log("The Machine has won!");
        computerScore += 1;
      }
      break;
  }
}

function winCondition() {
  if (playerScore == 5) {
    return console.log("You HAVE WON!");
  } else if (computerScore == 5) {
    return console.log("The Machine has WON!");
  }
}

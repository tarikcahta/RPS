const options = ["rock", "paper", "scissors"]


function computerPlay() {
  const choice = options[Math.floor(Math.random()*options.length)];
    return choice
}


const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
 
  if (playerSelection === computerSelection){
    console.log("It's a tie");
  } switch (playerSelection){
    case "rock":
      if(computerSelection === "scissors") {
        console.log("YOU have won!");
      }else console.log("The Machine has won!");
    break
    case "paper":
      if(computerSelection === "rock") {
        console.log("YOU have won!");
      } else console.log("The Machine has won!");
     break
     case "scissors":
       if (computerSelection === "paper"){
         console.log("YOU have won!");
       }else console.log("The Machine has won!");
   } 
}

console.log(playRound(playerSelection, computerSelection));

function theGame() {
  for (let i=0; i < 5; i++){
    let playerSelection = prompt("Enter you poison : ");
    playRound(playerSelection, computerSelection);
  }
}
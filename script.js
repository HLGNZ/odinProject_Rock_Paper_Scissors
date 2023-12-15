// getComputerChoice function reutern Rock, Paper and Scissors randomly.
let playerScore = 0
let computerScore = 0
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"]
  let random = parseInt(Math.random() * choice.length)
  return choice[random]
}
// playRound function rutern who Wins, Tie or Lose in the game.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++
    return `You Win! ${playerSelection} beats ${computerSelection}.
    Player Score: ${playerScore} computer Score ${computerScore}`
  } else if (playerSelection === computerSelection) {
    playerScore++
    computerScore++
    return `You Tie both chose ${playerSelection}.
    Player Score: ${playerScore} computer Score ${computerScore}.`
  } else {
    computerScore++
    return `You Lose! ${playerSelection} doesn't beat ${computerSelection}
    Player Score: ${playerScore} computer Score ${computerScore}`
  }
}

function game(round) {
  let i = 0
  if (playerScore || computerScore <= round) {
    while (i < round) {
      // massage alert user can input value.
      const playerSelection = prompt(
        "Enter your choice Rock, Paper or Scissors"
      )
      const computerSelection = getComputerChoice()
      console.log(
        playRound(
          // Switch first letter to captial then switch all letters to lower case
          playerSelection[0].toUpperCase() +
            playerSelection.toLowerCase().slice(1),
          computerSelection
        )
      )
      i++
    }
  }
  if (playerScore > computerScore) {
    return `you win! in this game
    Player Score: ${playerScore} computer Score ${computerScore}`
  } else {
    return `You lose in this game relod the page to try agin
    Player Score: ${playerScore} computer Score ${computerScore}`
  }
}

console.log(game(5))

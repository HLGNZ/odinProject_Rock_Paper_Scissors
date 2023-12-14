// getComputerChoice function reutern Rock, Paper and Scissors randomly.
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"]
  let random = parseInt(Math.random() * choice.length)
  return choice[random]
}
// playRound function rutern who Wins, Tie or Lose in the game.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You Tie ${playerSelection} with ${computerSelection}.`
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You Win ${playerSelection} beats ${computerSelection}.`
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You Win ${playerSelection} beats ${computerSelection}.`
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You Win ${playerSelection} beats ${computerSelection}.`
  } else {
    return `You Lose ${playerSelection} doesn't beat ${computerSelection}`
  }
}
// massage alert user can input value.
const playerSelection = prompt("Enter your choice Rock, Paper or Scissors")
const computerSelection = getComputerChoice()
console.log(
  playRound(
    // Switch first letter to captial then switch all letters to lower case
    playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1),
    computerSelection
  )
)

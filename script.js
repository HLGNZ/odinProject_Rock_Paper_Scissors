// global variables
let playerScore = 0
let computerScore = 0
let allBtn = document.querySelectorAll(".btn")
let playerSelection = getBtnValue()
let playerText = document.querySelector(".player-text")
let computerText = document.querySelector(".computer-text")
let resultText = document.querySelector(".result-text")

// getComputerChoice function return Rock, Paper and Scissors randomly.
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"]
  let random = parseInt(Math.random() * choice.length)
  return choice[random]
}
// this function return the buttons values from event listener.
function getBtnValue() {
  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let computerSelection = getComputerChoice()
      //store the output in resultText
      resultText.textContent = playRound(
        (playerSelection = e.target.textContent),
        computerSelection
      )
    })
  })
}

// playRound function return who Wins, Tie or Lose in the game.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++
    playerText.textContent = `Player Score: ${playerScore}`
    return `Result: You Win! ${playerSelection} beats ${computerSelection}.`
  } else if (playerSelection === computerSelection) {
    playerScore++
    playerText.textContent = `Player Score: ${playerScore}`
    computerScore++
    computerText.textContent = `Computer Score: ${computerScore}`
    return `Result: Tie both chose ${playerSelection}.`
  } else {
    computerScore++
    computerText.textContent = `Computer Score: ${computerScore}`
    return `Result: You Lose! ${playerSelection} doesn't beat ${computerSelection}.`
  }
}

// function game(round) {
//   let i = 0
//   if (playerScore || computerScore <= round) {
//     while (i < round) {
//
//       console.log(
//         playRound(
//
//
//              playerSelection
//           computerSelection
//         )
//       )
//       i++
//     }
//   }
//   if (playerScore > computerScore) {
//     return `you win! in this game
//     Player Score: ${playerScore} computer Score ${computerScore}`
//   } else {
//     return `You lose in this game reload the page to try agin
//     Player Score: ${playerScore} computer Score ${computerScore}`
//   }
// }
// game(5)
// console.log(playRound(playerSelection, computerSelection))

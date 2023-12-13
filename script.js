console.log(getComputerChoice())
// getComputerChoice function reutern Rock, Paper and Scissors randomly.
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"]
  let random = parseInt(Math.random() * choice.length)
  return choice[random]
}

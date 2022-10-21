
// This function generates random number between 1-3 for Computer Choice variable
function getComputerChoice(max) {
    return Math.floor(Math.random() * 3) + 1;   
  }
// Random 1-3 number get stored in computerChoice variable 
computerChoice = getComputerChoice();
// computerChoice variable gets assigned corresponding string value
// 1 = rock  2 = paper  3 = scissors'
if (computerChoice === 1) {
    computerChoice = "rock" 
}
else if (computerChoice === 2) {
    computerChoice = "paper"
}
else
    computerChoice = "scissors"

console.log(computerChoice)


  


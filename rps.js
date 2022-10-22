// Get computerChoice
// Write a funciton that changes between rock, paper or scissors for computerChoice
// genrate random number 1-3 and assign each number to a string value

function computerInput() {
    let number = Math.floor(Math.random() * 3)+1;
    if (number === 1) {
        return "rock"; 
    }
    else if (number === 2) {
        return "paper";
    }
    else if (number === 3) {
        return "scissors"
    }

} 
// Get userChoice
// User choice must be converted to lower case to neutralize string input
// User input must be validated as a legal option to return choice (through if else)

function playerInput() { 
    let playerInput = prompt("Choose rock, paper or scissors!").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") 
    return playerInput
    else
    return "That is not a valid input!"
}
    
// Store userInput and computerInput inside variables
const computerSelection = computerInput();
const playerSelection = playerInput(); 

// Write function that plays a single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! you both chose ${playerSelection}!`; 
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper!";
    }
    else
        return `You lose! ${computerSelection} beats ${playerSelection}!`
}
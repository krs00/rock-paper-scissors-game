
// -------- COMPUTER CHOICE GENERATOR --------------- 

// Returns a random string of rock paper or scissors
function getComputerChoice() {
    // Math.floor generates random number between 1 and 3 and stores it inside computerChoice variable
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // If else statment returns rock, paper, or scissors based of computerChoice number value
    if (computerChoice === 1) {
        return 'rock';
    }
    else if (computerChoice === 2) {
        return 'paper';
    }
    else if (computerChoice === 3) {
        return 'scissors' 
    }
  }

// -------- COMPUTER CHOICE GENERATOR ---------------

// -------- PLAY ROUND -----------------------------

// function accepts players selection and computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}!`
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! rock beats scissors!' 
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! paper beats rock!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! scissors beats paper!'
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!` 
    }

}
// ----------- PLAY ROUND -----------------------------------
const computerSelection = getComputerChoice();
const playerSelection = prompt()

console.log(playRound(playerSelection, computerSelection)) 


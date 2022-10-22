// Get computerChoice
// Write a funciton that changes between rock, paper or scissors for computerChoice
// genrate random number 1-3 and assign each number to a string value

function computerInput() {
    let random = Math.floor(Math.random() * 3)+1;
    if (random === 1) {
        return "rock"; 
    }
    else if (random === 2) {
        return "paper";
    }
    else if (random === 3) {
        return "scissors"
    }  
} 
// Get userChoice
// User choice must be converted to lower case to neutralize string input
// User input must be validated as a legal option to return choice (through if else)

function playerInput() {  
    let playerInput = prompt("Choose rock, paper or scissors!").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") 
        return playerInput;
    else
        console.log("Please choose rock, paper or scissors!")
}
    
// Store userInput and computerInput inside variables

const computerChoice = computerInput();
const playerChoice = playerInput();



// Write function that plays a single round of rock paper scissors

// IF THE PLAYER WINS 
function playRound() {
    if (playerChoice === computerChoice) {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("It's a tie!"); 
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You win! Rock beats scissors!"); 
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You win! Paper beats rock!"); 
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You win! Scissors beats paper!");  
    }
    // IF THE PLAYER ENTERS UNDEFINED VALUE 
    else if (playerChoice === undefined) { 
        return
    }
    // IF THE PLAYER LOOSES
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You loose! Paper beats rock!");
}
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You loose! Scissors beats paper!");
}
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`The computer chose ${computerChoice}`);
        console.log(`You chose ${playerChoice}`);  
        console.log("You loose! Rock beats scissors!"); 
}

}

playRound();



 
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
}
// INITIALIZE COMPUTER SCORE AND PLAYER SCORE
let computerScore = 0;
let playerScore = 0;
// Write function that plays a single round of rock paper scissors

// IF THE PLAYER WINS  
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) { 
        return "It's a tie!"; 
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        return "You win! Rock beats scissors!";
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        return "You win! Paper beats rock!";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        return "You win! Scissors beats paper!";
    }
    // IF THE PLAYER ENTERS UNDEFINED VALUE 
    else if (playerChoice === undefined) { 
        return "Please choose rock, paper or scissors"
        
    }
    // IF THE PLAYER LOOSES
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        return "You lose! Paper beats rock!";
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        return "You lose! Scissors beats paper!";
        
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        return "You lose! Rock beats scissors!";
    }
}
 
// THIS FUNCTION WILL REPEAT SINGLE ROUND 5 TIMES
function game() {
    for (let i = 0; i < 5; i++) {

        const computerChoice = computerInput();
        const playerChoice = playerInput(); 

        console.log("The computer choose: "+ computerChoice+"\nYou choose: "+ playerChoice);
        let returned = playRound(playerChoice, computerChoice); 
        console.log(returned+"\n"); 
    }



// END OF GAME TEXT
    if (playerScore == computerScore) {
        console.log("Player score: "+ playerScore +"\nComputer score: "+computerScore 
                     +"\nThe Game is tie");
    }
    else if(playerScore > computerScore){
        console.log("Player score: "+playerScore +"\nComputer score: "+computerScore 
        +"\nYou win the game!"); 
    }
    else if(computerScore > playerScore){
        console.log("Player score: "+playerScore +"\nComputer score: "+computerScore 
        +"\nYou lose"+"\nThe machines have won ... ");  
    }
} 
game();


 
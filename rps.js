// Get all necessary DOM nodes 

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')

rockBtn.addEventListener('click', getPlayerChoice)
paperBtn.addEventListener('click', getPlayerChoice)
scissorsBtn.addEventListener('click', getPlayerChoice) 



const results = document.getElementById('results') 

const playerAnnounce = document.querySelector('.playerChoice') 

const computerAnnounce = document.querySelector('.computerChoice')

const yourScore = document.querySelector('.yourScore')

const compScore = document.querySelector('.compScore')






// Initialize playerScore, computerScore and draws

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// This function will grab computerChoice by generating random number 1-3 then assigning
// Return value Rock, Paper or Scissors

function computerChoice() {
    let random = Math.floor(Math.random() * 3)+1;
    if (random === 1) {
        return "rock"; 
    }
    else if (random === 2) {
        return "paper";
    }
    else if (random === 3) {
        return "scissors";
    }  
}


// FUNCTION THAT PLAYS ROUND
// IF THE PLAYER WINS   
function playRound(playerChoice, computerChoice) {

    playerAnnounce.textContent = `You played ${playerChoice}!`
    computerAnnounce.textContent = `The computer played ${computerChoice}!`

    if (playerChoice === computerChoice) {
        rounds++;
        results.textContent = "It's a tie!"; 
    }
    // IF PLAYER WINS
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        rounds++;
        playerScore++; 
        results.textContent = "You win! Rock beats scissors!"; 
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        rounds++;
        playerScore++;
        results.textContent = "You win! Paper beats rock!";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        rounds++;
        playerScore++;
        results.textContent = "You win! Scissors beats paper!";
    }

    // IF THE PLAYER LOOSES 
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        rounds++;
        computerScore++;
        results.textContent = "You lose! Paper beats rock!";
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        rounds++;
        computerScore++;
        results.textContent = "You lose! Scissors beats paper!";
        
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        rounds++;
        computerScore++;
        results.textContent = "You lose! Rock beats scissors!";
    }
    // OTHER SIDE OF GAME
    compScore.innerHTML = computerScore
    yourScore.innerHTML = playerScore
    console.log(rounds)
    console.log(`computer score is ${computerScore}`)
    console.log(`player score is ${playerScore}`)

    // STOP GAME AT 5 POINTS
    if(computerScore === 5 || playerScore === 5) {
    rockBtn.removeEventListener('click', getPlayerChoice)
    paperBtn.removeEventListener('click', getPlayerChoice)
    scissorsBtn.removeEventListener('click', getPlayerChoice) 
    }

    if(computerScore === 5) {
        results.style.color = 'red'
        results.textContent = "You lost the game to the Computer ...";
    }

    if(playerScore === 5) {
        results.style.color = 'green'
        results.textContent = "You have won the game!";
    }

    }

 
// GETS CHOICE FROM PLAYER SELECTION AND CALLS PLAYROUND FUNCTION WITH ID
function getPlayerChoice(e) {

    let playerChoice = (e.target.id)
    playRound(playerChoice, computerChoice())

}
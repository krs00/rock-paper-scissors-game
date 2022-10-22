// Get computerChoice
// Write a funciton or variable that changes between rock, paper or scissors for computerChoice
// genrate random number 1-3 and assign each number to a string value

function computerChoice() {
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


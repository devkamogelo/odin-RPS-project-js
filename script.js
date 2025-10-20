const resultHeading = document.querySelector("#winner");
const paragraph = document.querySelector("#shortMessage");
const currentScoreDisplay = document.querySelector("#score");

if(!resultHeading){
    console.error("#winner not found!");
}

function getComputerChoice() {
    var randomNum = Math.random();
    if (randomNum >= 0 && randomNum <= 0.3) {
        return 'rock'
    } else if (randomNum >= 0.3 && randomNum <= 0.6){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    var choice = prompt("Pick a choice: Rock , Paper , Scissors")
    return choice.toLowerCase()
}



var humanScore = 0
var computerScore = 0
var draws = 0
var gamesPlayed = 0;

function playRound(computerChoice, humanChoice){
    if(computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++
        displayResults("Computer Wins!", humanChoice, computerChoice);
    } else if(computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++
        displayResults("Computer Wins!", humanChoice, computerChoice);
    } else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++
        displayResults("Computer Wins!", humanChoice, computerChoice);
    } else if (computerChoice == humanChoice){
        draws++
        displayResults("Draw!", humanChoice, computerChoice);
    } else {
        humanScore++
        displayResults("You Win!", humanChoice, computerChoice);
    }
}

function displayResults(winner, humanChoice, computerChoice){
    resultHeading.textContent = winner;
    paragraph.textContent = "Your Choice: " + humanChoice + ", Computer Choice: " + computerChoice;
    currentScoreDisplay.textContent = "Current score " + humanScore + " : " + computerScore;
}

function gameOver(){
    resultHeading.textContent = computerScore > humanScore ? "Computer Wins" : "You win";
    paragraph.textContent = computerScore > humanScore ? "Good luck next time" : "Well done!";
    currentScoreDisplay.textContent = "Score " + humanScore + " : " + computerScore;
}
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
   
    rockButton.onclick = () => {
        if(gamesPlayed < 5){
            playRound(getComputerChoice(), "rock"); 
            gamesPlayed++;
        } else {
            gameOver()
        }
    };
    paperButton.onclick = () => {
        if(gamesPlayed < 5){
            playRound(getComputerChoice(), "paper"); 
            gamesPlayed++;
        } else {
            gameOver()
        }
    };
    scissorsButton.onclick = () => {
        if(gamesPlayed < 5){
            playRound(getComputerChoice(), "scissors"); 
            gamesPlayed++;
        } else {
            gameOver()
        }
    };




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

function playRound(computerChoice, humanChoice){
    if(computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++
    } else if(computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++
    } else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++
    } else if (computerChoice == humanChoice){
        draws++
    } else {
        humanScore++
    }
}

function playGame(){
    var gamesPlayed = 0;
    
    while (gamesPlayed <= 5){
        playRound(getComputerChoice(), getHumanChoice())
        gamesPlayed++
    }

    if (computerScore > humanScore){
        console.log("Computer wins. " + computerScore + " : " + humanScore)
        console.log(draws + " draws.")
    } else {
        console.log("You win! " + humanScore + " : " + computerScore);
    }
}

playGame()

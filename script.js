var humanScore = 0
var computerScore = 0


function getComputerChoice() {
    var randomNum = Math.random();
    if (randomNum >= 0 && randomNum <= 0.3) {
        return 'Rock'
    } else if (randomNum >= 0.3 && randomNum <= 0.6){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    var choice = prompt("Pick a choice: 1.Rock , 2.Paper , 3.Scissors")
    if (choice == 1) {
        return "Rock"
    } else if (choice == 2){ 
        return "Paper"
    } else {
        return "Scissors"
    }
}


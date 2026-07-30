const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")

btnRock.addEventListener("click", () => {
    playRound("rock")
})
btnPaper.addEventListener("click", () => {
    playRound("paper")
})
btnScissors.addEventListener("click", () => {
    playRound("scissors")
})

function getComputerChoice() {
    let choice = Math.random()
    let computerChoice = choice >= 0 && choice <= 0.33 ? "paper" :
        choice > 0.33 && choice <= 0.66 ? "scissors" : "rock"

    console.log(computerChoice)
    return computerChoice
}

function updateScore(winner) {
    const scoreHuman = document.getElementById("score-human")
    const scoreComputer = document.getElementById("score-computer")

    if (winner == "human") {
        scoreHuman.textContent++
    } else if (winner == "computer") {
        scoreComputer.textContent++
    }
}

function compareRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose, paper beats rock")
        return "computer"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win, paper beats rock")
        return "human"
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win, scissors beat paper")
        return "human"
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose, scissors beat paper")
        return "computer"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose, scissors beat rock")
        return "computer"
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win, rock beats scissors")
        return "human"
    } else {
        console.log("It's a tie, nobody wins.")
        return "tie"
    }
}

function playRound(humanChoice) {
    let winner = compareRound(humanChoice, getComputerChoice())
    updateScore(winner)
}
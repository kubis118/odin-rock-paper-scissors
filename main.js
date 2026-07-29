function getComputerChoice() {
    let choice = Math.random()
    let computerChoice = choice >= 0 && choice <= 0.3 ? "paper" :
        choice > 0.3 && choice <= 0.6 ? "scissors" : "rock"

    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() {
    let choice = prompt(`Enter "Rock", "Paper" or "Scissors)`).toLowerCase()
    console.log(choice)
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You loose, paper beats rock")
        return "computer"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win, paper beats rock")
        return "human"
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win, scissors beat paper")
        return "human"
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You loose, scissors beat paper")
        return "computer"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You loose, scissors beat rock")
        return "computer"
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win, scissors beat rock")
        return "human"
    } else {
        console.log("It's a tie, nobody wins.")
        return "tie"
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let winner = playRound(humanChoice, computerChoice)

        if (winner == "computer") {
            computerScore++
        } else if (winner == "human") {
            humanScore++
        }

        console.log(humanScore, computerScore)

    }

    if (humanScore > computerScore) {
        console.log(`You win with ${humanScore}`)
    } else if (humanScore == computerScore) {
        console.log(`It's a tie with ${humanScore} : ${humanScore}`)
    } else {
        console.log(`Computer wins with ${computerScore}`)
    }
}

playGame()


const GameSummary = {
    wins: 0,
    losses: 0,
}

const game = {
    userChoice: "",
    computerChoice: "",
}

const winner = document.querySelector('.info');
const aiSelection = document.querySelector('.aiSelection')
const choice = [...document.querySelectorAll('.choice')];
const userScore = document.querySelector('.userScore');
const computerScore = document.querySelector('.computerScore');


function optionSelected() {
    game.userChoice = this.dataset.option
    choice.forEach(choice => choice.style.transform = '');
}

function computerChoiceFunction() {
    if ( choice.length === 3) {
    const aiChoice = choice[Math.floor(Math.random() * 3)].dataset.option;
    return aiChoice; 
} else {
    const aiChoice = choice[Math.floor(Math.random() * 5)].dataset.option;
    return aiChoice; 
}
}

function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw'
    } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "rock" && computerChoice === "lizard") || (userChoice === "lizard" && computerChoice === "spock") || (userChoice === "spock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "lizard") || (userChoice === "spock" && computerChoice === "rock") || (userChoice === "lizard" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "spock")) {
        return 'win'
    } else {
        return 'loss'
    }
}

function publishResult(user, computer, result) {
    aiSelection.textContent = `Opponent chose: ${game.computerChoice}`;
    if (result === "win") {
        userScore.textContent = ++GameSummary.wins;
        winner.textContent = "YOU WIN !";
    } else if (result === "loss") {
        computerScore.textContent = ++GameSummary.losses;
        winner.textContent = "YOU LOSE ...";
    } else {
        winner.textContent = "DRAW!";
    }
}


function startGame() {
    game.computerChoice = computerChoiceFunction();
    const result = checkResult(game.userChoice, game.computerChoice)
    console.log(game.computerChoice);
    console.log(game.userChoice);
    console.log(result);
    publishResult(game.userChoice, game.computerChoice, result)
}


choice.forEach(choice => choice.addEventListener('click', optionSelected))

choice.forEach(choice => choice.addEventListener('click', startGame))

document.querySelector('button').addEventListener('click', restart = () => {
    computerScore.textContent = GameSummary.wins = "0";
    userScore.textContent = GameSummary.losses = "0";
    winner.textContent = "---";
})
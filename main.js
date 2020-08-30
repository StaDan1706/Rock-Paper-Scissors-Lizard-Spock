const GameSummary = {
    wins: 0,
    losses: 0,
}

const game = {
    userChoice: "",
    computerChoice: "",
}

const choice = [...document.querySelectorAll('.choice')];


function optionSelected() {
    game.userChoice = this.dataset.option
    choice.forEach(choice => choice.style.transform = '');
}

function computerChoiceFunction() {
    const aiChoice = choice[Math.floor(Math.random() * 3)].dataset.option;
    return aiChoice;
}

function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw'
    } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || userChoice === "scissors" && computerChoice === "paper") {
        return 'win'
    } else {
        return 'loss'
    }
}

function publishResult(user, computer, result) {

    document.querySelector('.computerScore').textContent = GameSummary.losses;

    if (result === "win") {
        document.querySelector('.userScore').textContent = ++GameSummary.wins;
        document.querySelector('.winner p').textContent = "YOU WIN !";
    } else if (result === "loss") {
        document.querySelector('.computerScore').textContent = ++GameSummary.losses;
        document.querySelector('.winner p').textContent = "YOU LOSE ...";
    } else {
        document.querySelector('.winner p').textContent = "DRAW!";
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
    document.querySelector('.computerScore').textContent = GameSummary.wins = "0";
    document.querySelector('.userScore').textContent = GameSummary.losses = "0";
    document.querySelector('.winner p').textContent = "---";
})


let score =JSON.parse(localStorage.getItem('score'));


if (score === null) {
    score  = {
        wins: 0,
        loses: 0,
        tie: 0
    };
}



function resetGame() {
    score.wins = 0;
    score.loses = 0;
    score.tie = 0;
    localStorage.removeItem('score');

    updateScore();
}


function computerChoice () {
    let rezult = "";
    const ComputerValue = Math.floor(Math.random() * 3);

    if (ComputerValue === 0) {
        rezult = "rock";
    } else if (ComputerValue === 1) {
        rezult = "paper";
    } else if (ComputerValue === 2) {
        rezult = "scissors";
    }

    return rezult;
}

function playRound (humanChoice) {
    let computerMove = computerChoice();
    let rez = '';

    if (humanChoice === "rock") {
        if (computerMove === "rock") {
            rez = "You tie";
            score.tie++;
        } else if (computerMove === "paper") {
            rez = "You lose";
            score.loses++;
        } else if (computerMove === "scissors") {
            rez = "You win";
            score.wins++;
        }
    } else if (humanChoice === "paper") {
        if (computerMove === "rock") {
            rez = "You win";
            score.wins++;
        } else if (computerMove === "paper") {
            rez = "You tie";
            score.tie++;
        } else if (computerMove === "scissors") {
            rez = "You lose";
            score.loses++;
        }
    } else if (humanChoice === "scissors") {
        if (computerMove === "rock") {
            rez = "You lose";
            score.loses++;
        } else if (computerMove === "paper") {
            rez = "You win";
            score.wins++;
        } else if (computerMove === "scissors") {
            rez = "You tie";
            score.tie++;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
    .innerHTML = rez;

    document.querySelector('.js-moves')
    .innerHTML = `You - <img src="${humanChoice}.png" class="js-buttons"> : <img src="${computerMove}.png" class="js-buttons"> - Computer`;

    
}

function updateScore() {
    document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Tie: ${score.tie}, Losses: ${score.loses}`;
}
const MAX_ROUNDS = 5;

const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

function getComputerChoice() {
    const options = Object.keys(winConditions);
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const roundNumberEl = document.getElementById('round-number');
    const humanScoreEl = document.getElementById('human-score');
    const computerScoreEl = document.getElementById('computer-score');
    const humanChoiceEl = document.getElementById('human-choice');
    const computerChoiceEl = document.getElementById('computer-choice');
    const roundResultEl = document.getElementById('round-result');
    const restartButton = document.getElementById('restart');
    const choiceButtons = Array.from(document.querySelectorAll('[data-choice]'));

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    let gameOver = false;

    function setButtonsEnabled(enabled) {
        for (const button of choiceButtons) {
            button.disabled = !enabled;
        }
    }

    function updateUI({ humanChoice, computerChoice, message } = {}) {
        if (roundNumberEl) roundNumberEl.textContent = String(round);
        if (humanScoreEl) humanScoreEl.textContent = String(humanScore);
        if (computerScoreEl) computerScoreEl.textContent = String(computerScore);
        if (humanChoiceEl && humanChoice !== undefined) {
            humanChoiceEl.textContent = humanChoice ? capitalize(humanChoice) : '—';
        }
        if (computerChoiceEl && computerChoice !== undefined) {
            computerChoiceEl.textContent = computerChoice ? capitalize(computerChoice) : '—';
        }
        if (roundResultEl && message !== undefined) roundResultEl.textContent = message;
    }

    function endGame() {
        gameOver = true;
        setButtonsEnabled(false);
        if (restartButton) restartButton.hidden = false;

        let finalMessage;
        if (humanScore > computerScore) {
            finalMessage = `Game over — you win ${humanScore} to ${computerScore}!`;
        } else if (computerScore > humanScore) {
            finalMessage = `Game over — computer wins ${computerScore} to ${humanScore}.`;
        } else {
            finalMessage = `Game over — it's a tie at ${humanScore} to ${computerScore}.`;
        }

        updateUI({ message: finalMessage });
    }

    function playRound(humanChoice) {
        if (gameOver) return;

        const computerChoice = getComputerChoice();
        round += 1;

        let message;
        if (humanChoice === computerChoice) {
            message = `Round ${round}: tie! Both chose ${capitalize(humanChoice)}.`;
        } else if (winConditions[humanChoice] === computerChoice) {
            humanScore += 1;
            message = `Round ${round}: you win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
        } else {
            computerScore += 1;
            message = `Round ${round}: you lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
        }

        updateUI({ humanChoice, computerChoice, message });

        if (round >= MAX_ROUNDS) endGame();
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        round = 0;
        gameOver = false;
        setButtonsEnabled(true);
        if (restartButton) restartButton.hidden = true;
        updateUI({ humanChoice: '', computerChoice: '', message: 'Make your choice to begin.' });
    }

    for (const button of choiceButtons) {
        button.addEventListener('click', () => {
            const choice = button.getAttribute('data-choice');
            if (choice) playRound(choice);
        });
    }

    if (restartButton) restartButton.addEventListener('click', resetGame);

    resetGame();
});

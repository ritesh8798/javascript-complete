let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remainings = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultparas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = Number(userInput.value.trim());
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("please enter a valid number.")
    } else if (guess < 1) {
        displayMessage("please enter number greater than 1.")
    } else if (guess > 100) {
        displayMessage("please enter number less than 100.")
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);

        if (numGuess > 10) {
          displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
            return;
        }
    }
}

function checkGuess(guess) {
    const difference = Math.abs(randomNumber - guess);

    if (guess === randomNumber) {
        displayMessage(`You guessed it right! The random number was ${randomNumber}`);
        endGame();
        return;
    } else if (difference <= 5) {
        displayMessage(`You are too close to the number !`);
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low.`);
    } else {
        displayMessage(`Number is too high.`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remainings.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;   
}

function endGame() {
    if (!playGame) return; //prevents duplicate call

    userInput.value = "";
    userInput.setAttribute("disabled", "");
    playGame = false;

    const p = document.createElement("p");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    resultParas.appendChild(p);

    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;

        guessSlot.innerHTML = "";
        remainings.innerHTML = "10";
        lowOrHi.innerHTML = "";

        userInput.removeAttribute("disabled");
        resultParas.removeChild(newGameBtn.parentElement);

        playGame = true;
    })
}
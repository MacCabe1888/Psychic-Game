let psychicChoices =
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let yourGuesses = "";

let directionsText = document.getElementById("directions-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeftText = document.getElementById("guesses-left-text");
let yourGuessesText = document.getElementById("your-guesses-text");

let psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

document.onkeyup = function(event) {

    let playerGuess = event.key.toLowerCase();

    if (psychicChoices.includes(playerGuess)) {
        if (playerGuess === psychicAnswer) {
            wins++;
            guessesLeft = 9;
            yourGuesses = "";
            psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
        } else if ( (guessesLeft === 1) && (!yourGuesses.includes(playerGuess)) ) {
            losses++;
            guessesLeft = 9;
            yourGuesses = "";
            psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
        } else if (!yourGuesses.includes(playerGuess)) {
            guessesLeft--;
            yourGuesses = yourGuesses + " " + playerGuess;
            if (yourGuesses.length > 0) {
                yourGuesses = yourGuesses + ",";
            }
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        yourGuessesText.textContent = "Your Guesses so far: " + yourGuesses;

    }

};
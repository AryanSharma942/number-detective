const number = parseInt(Math.random()*20 + 1);
const userInput = document.querySelector(".guessField");
const submit = document.getElementById("subt");
const prevGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector('.resultParas');

console.log(number)
let olderGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {
   submit.addEventListener("click", function(e){
       let guess = parseInt(userInput.value)
       e.preventDefault()
       validate(guess)
   })
}

function validate(guess){
    if (isNaN(guess)) {
        alert("Your number is invalid.");
    } else if (guess > 20) {
        alert("Your number must not be more than 20.");
    } else if (guess < 1) {
        alert("Your number must not be less than 1.");
    } else {
        olderGuess.push(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if(guess === number) {
        displayMessage(`You win`)
        displayGuess(guess)
    } else if(guess < number) {
        displayMessage(`Your number is less than the random number.`)
        displayGuess(guess)
    } else if(guess > number) {
        displayMessage(`Your number is greater than the random number.`)
        displayGuess(guess)
    }
}

function displayGuess(guess) {
    userInput.value = ""
    prevGuess.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${9 - numGuess}`
    endGame(guess)
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess) {
    if (remaining.innerHTML === '0') {
        if (guess === number){
            displayMessage(`You win`)
            userInput.value = ""
            submit.disabled = true
            userInput.disabled = true
        } else {
            displayMessage(`Game Over. The random number was ${number}`)
            userInput.value = ""
            submit.disabled = true
            userInput.disabled = true
        }
    }
}
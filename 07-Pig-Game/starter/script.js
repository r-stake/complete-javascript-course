"use strict";
/*
// My solution, implemented before watching the video and modified after
// Create variables for DOM elements
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const currentScore1 = document.querySelector("#current--0");
const totalScore1 = document.querySelector("#score--0");
const currentScore2 = document.querySelector("#current--1");
const totalScore2 = document.querySelector("#score--1");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// Create player score & currentPlayer variables
let playerOneCurrentScore = 0;
let playerOneTotalScore = 0;
let playerTwoCurrentScore = 0;
let playerTwoTotalScore = 0;
let currentPlayer = "player one";

// Create a function that switches current player
function switchCurrentPlayer() {
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
  if (currentPlayer === "player one") {
    return "player two";
  } else {
    return "player one";
  }
}

// Create a function that generates a random dice roll
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

// Create a function that displays the dice roll
function displayDiceRoll(diceValue) {
  if (dice.classList.contains("hidden")) {
    dice.classList.remove("hidden");
  }
  dice.setAttribute("src", `dice-${diceValue}.png`);
}

// Create a function that adds to the players current score
function addCurrentScore(score) {
  if (currentPlayer === "player one") {
    playerOneCurrentScore += score;
  } else {
    playerTwoCurrentScore += score;
  }
}

// Create a function to get active players current score
function getCurrentPlayerCurrentScore() {
  if (currentPlayer === "player one") {
    return playerOneCurrentScore;
  } else {
    return playerTwoCurrentScore;
  }
}

// Create a function that resets current score to 0
function resetCurrentScore() {
  playerOneCurrentScore = 0;
  playerTwoCurrentScore = 0;
}

// Create a function that displays the current score
function displayCurrentScore() {
  currentScore1.textContent = playerOneCurrentScore;
  currentScore2.textContent = playerTwoCurrentScore;
}

// Create a function that evaluates the dice roll result and adds it to the score or switches the current player
function evaluateDiceRoll(dice) {
  if (dice === 1) {
    currentPlayer = switchCurrentPlayer();
    resetCurrentScore();
  } else {
    addCurrentScore(dice);
  }

  displayCurrentScore();
}

// Create an event handler function for the dice roll button
function eventHandlerDiceRoll() {
  if (playerOneTotalScore < 100 && playerTwoTotalScore < 100) {
    const diceValue = rollDice();
    console.log(currentPlayer, diceValue);
    displayDiceRoll(diceValue);
    evaluateDiceRoll(diceValue);
  }
}

// Create a function for adding current score to the total score
function addTotalScore() {
  if (currentPlayer === "player one") {
    playerOneTotalScore += playerOneCurrentScore;
  } else {
    playerTwoTotalScore += playerTwoCurrentScore;
  }

  resetCurrentScore();
}

// Create a function to display total score
function displayTotalScore() {
  totalScore1.textContent = playerOneTotalScore;
  totalScore2.textContent = playerTwoTotalScore;
}

// Create a function to check if the game is won
function isGameWon() {
  if (playerOneTotalScore >= 100) {
    console.log("Player one wins");
    player1.classList.add("player--winner");
  } else if (playerTwoTotalScore >= 100) {
    console.log("Player two wins");
    player2.classList.add("player--winner");
  } else {
    currentPlayer = switchCurrentPlayer();
  }
}

// Create an event handler function for the hold button
function eventHandlerHold() {
  // Call event handler functions only if the current players score is greater than 0
  if (getCurrentPlayerCurrentScore() > 0) {
    addTotalScore();
    displayTotalScore();
    isGameWon();
  }
}

// Create a function to reset the game
function resetGame() {
  dice.classList.add("hidden");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");

  playerOneCurrentScore = 0;
  playerOneTotalScore = 0;
  playerTwoCurrentScore = 0;
  playerTwoTotalScore = 0;

  displayCurrentScore();
  displayTotalScore();
  currentPlayer = "player one";
}

// Create and event listener for the "ROLL DICE" button;
btnRollDice.addEventListener("click", eventHandlerDiceRoll);
btnHold.addEventListener("click", eventHandlerHold);
btnNew.addEventListener("click", resetGame);

// Create a function to start the game
function startGame() {
  resetGame();
}

startGame();
*/

// Video solution
// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if the player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

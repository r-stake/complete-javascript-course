"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct number!";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".number").textContent);
document.querySelector(".number").textContent = 13;
console.log(document.querySelector(".score").textContent);
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 75;
console.log(document.querySelector(".guess").value);
*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no player input
  if (!guess) {
    displayMessage("No number!");
    // document.querySelector(".message").textContent = "No number!";

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    // document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      // document.querySelector(".message").textContent = guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  // Old implementation with duplicate code
  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".again").addEventListener("click", function () {
  // Reset values of the score and secretNumber variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  // Reset the initial conditions of the message, number, score, high score and guess input field
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  // Reset background color and number width
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

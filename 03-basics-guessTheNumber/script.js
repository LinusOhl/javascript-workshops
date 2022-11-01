const getRandomNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};

let randomNumber = getRandomNumber();
let correctGuess = false;
let guesses = 1;
const hiScore = [];

function checkGuess() {
  let userGuess = prompt("Guess the correct number between 1-10!");
  userGuess = Number(userGuess);

  console.log(userGuess, randomNumber);

  while (!correctGuess) {
    if (userGuess === 0) {
      console.log("Exited game.");
      correctGuess = true;
    } else if (userGuess === randomNumber) {
      hiScore.push(guesses);

      for (let i = 0; i < hiScore.length; i++) {
        if (hiScore.length === 1) {
          document.getElementById(
            "hiScore"
          ).innerHTML = `Your hiScore: ${hiScore[0]}`;
        } else if (guesses < hiScore[i]) {
          document.getElementById(
            "hiScore"
          ).innerHTML = `Your hiScore: ${guesses}`;
          console.log("New hiScore!");
        } else if (guesses > hiScore[i]) {
          console.log("Not a new hiScore, but still a win!");
        }
      }

      console.log(hiScore);
      correctGuess = true;
    } else if (userGuess != randomNumber) {
      if (userGuess > randomNumber) {
        console.log("Guess too HIGH!");
      } else {
        console.log("Guess too LOW!");
      }

      console.log("Wrong!");
      guesses++;
      checkGuess();
    }
  }
}

function playGame() {
  correctGuess = false;
  guesses = 1;
  randomNumber = getRandomNumber();

  checkGuess();
}

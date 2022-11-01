const getRandomNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};

let randomNumber = getRandomNumber();
let correctGuess = false;
let guesses = 0;
let hiScore = 0;

const checkGuess = () => {
  let userGuess = Number(prompt("Guess the correct number between 1-10!"));

  while (!correctGuess) {
    if (userGuess === 0) {
      console.log("Exited game.");
      correctGuess = true;
    } else if (userGuess === randomNumber) {
      guesses++;

      console.log("Your guesses:", guesses);

      if (hiScore) {
        if (guesses < hiScore) {
          hiScore = guesses;

          document.getElementById(
            "hiScore"
          ).innerHTML = `Your hiScore: ${hiScore}`;
          console.log("New hiScore!");
        } else {
          console.log("Not a new hiScore, but still a win!");
        }
      } else {
        hiScore = guesses;

        document.getElementById(
          "hiScore"
        ).innerHTML = `Your hiScore: ${hiScore}`;
        console.log("New hiScore!");
      }

      correctGuess = true;
    } else if (userGuess != randomNumber) {
      console.log("Wrong!");
      guesses++;

      if (userGuess > randomNumber) {
        console.log("Guess too HIGH!");
      } else {
        console.log("Guess too LOW!");
      }

      checkGuess();
    }
  }
};

const playGame = () => {
  correctGuess = false;
  guesses = 0;
  randomNumber = getRandomNumber();

  checkGuess();
};

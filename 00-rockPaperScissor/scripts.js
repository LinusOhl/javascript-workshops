// declare variables
let userInput = 0;
let aiInput = Math.floor(Math.random() * 3);

let userScore = 0;
let aiScore = 0;

// plays rock-paper-scissors
function playRPS() {
  if (userInput === aiInput) {
    document.getElementById("result").innerHTML = "It's a draw.";
    console.log("It's a draw.", userInput, aiInput);
  } else if (userInput === 0 && aiInput === 1) {
    document.getElementById("result").innerHTML = "You lost.";
    console.log("You lost.", userInput, aiInput);
    aiScore++;
  } else if (userInput === 1 && aiInput === 2) {
    document.getElementById("result").innerHTML = "You lost.";
    console.log("You lost.", userInput, aiInput);
    aiScore++;
  } else if (userInput === 2 && aiInput === 0) {
    document.getElementById("result").innerHTML = "You lost.";
    console.log("You lost.", userInput, aiInput);
    aiScore++;
  } else {
    document.getElementById("result").innerHTML = "You won!";
    console.log("You won!", userInput, aiInput);
    userScore++;
  }

  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("aiScore").innerHTML = aiScore;
}

// writes out aiChoice
function aiChoice() {
  if (aiInput === 0) {
    document.getElementById("aiChoice").innerHTML = "✋";
  } else if (aiInput === 1) {
    document.getElementById("aiChoice").innerHTML = "✌";
  } else if (aiInput === 2) {
    document.getElementById("aiChoice").innerHTML = "✊";
  }
}

// runs it all
function getUserInput(userChoice) {
  if (userChoice === "paper") {
    document.getElementById("userChoice").innerHTML = "✋";
    console.log("You chose ✋!");
    userInput = 0;
    aiInput = Math.floor(Math.random() * 3);
  } else if (userChoice === "scissor") {
    document.getElementById("userChoice").innerHTML = "✌";
    console.log("You chose ✌!");
    userInput = 1;
    aiInput = Math.floor(Math.random() * 3);
  } else if (userChoice === "rock") {
    document.getElementById("userChoice").innerHTML = "✊";
    console.log("You chose ✊!");
    userInput = 2;
    aiInput = Math.floor(Math.random() * 3);
  }

  aiChoice();

  playRPS();
}

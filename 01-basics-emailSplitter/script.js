// gets the top domain of the mail

const userInput = prompt("Enter mail!");

// const email = "firstName.lastName@gmail.com";
const lastDot = userInput.lastIndexOf(".");
const topDomain = userInput.slice(lastDot, userInput.length);

const atPosition = userInput.indexOf("@");
const beforeAt = userInput.slice(userInput.length[0], atPosition);
const afterAt = userInput.slice(atPosition, userInput.length);

console.log(
  "Your name: " + beforeAt + "\n",
  "Your mail: " + afterAt + "\n",
  "Your top domain: " + topDomain
);

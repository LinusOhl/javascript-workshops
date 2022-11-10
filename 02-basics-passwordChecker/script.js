/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password = prompt("Enter a password.");
// password = "password"; // inte giltigt
// // password = "pa$sword"; // giltigt
// // password = "p@ssw%rd"; // giltigt
// // password = "pa$$word"; // giltigt
// // password = "secretpassword"; // inte giltigt
// // password = "secret-password"; // giltigt
// // password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
  "-",
];

// counter for specialChars
let specialCharsCounter = 0;

// counts how many specialChars are in the password
const checkPassword = () => {
  for (let i = 0; i < specialChars.length; i++) {
    if (password.includes(specialChars[i])) {
      specialCharsCounter++;
    }
  }
  return specialCharsCounter;
};

// checks how strong the password is
if (password.length >= 6 && checkPassword() >= 2) {
  alert("🟢 Password Very Much Accepted.");
} else if (password.length >= 8 && checkPassword() >= 1) {
  alert("🟢 Password Much Accepted.");
} else if (password.length >= 16) {
  alert("🟢 Password Accepted.");
} else {
  alert("🔴 Password NOT Accepted.");
}

const btn = document.querySelector("#add");
const listItems = document.querySelectorAll("li");
let counter = listItems.length;

btn.addEventListener("click", () => {
  counter++;
  document.querySelector("ul").innerHTML += `<li>${prompt(
    "Add new item"
  )} ${counter}</li>`;
});

/*
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
  });
});
*/

document.querySelector("ul").addEventListener("click", (e) => {
  e.target.classList.toggle("completed");
});

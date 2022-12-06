import "./style.css";

const newTodoForm = document.querySelector("#new-todo-form");
const todosList = document.querySelector("#todos")!;

const getRandomNumber = (max: number = 10) => {
  return Math.ceil(Math.random() * max);
};
console.log(getRandomNumber(10));

newTodoForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNewTodoTitle =
    document.querySelector<HTMLInputElement>("#new-todo-title")!;
  const newTodoTitle = inputNewTodoTitle.value;

  todosList.innerHTML += `
    <li>${newTodoTitle}</li>
  `;

  console.log(newTodoTitle);
});

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const newTodoForm = document.querySelector("#new-todo-form");
const todosList = document.querySelector("#todos");

newTodoForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNewTodoTitle =
    document.querySelector<HTMLInputElement>("#new-todo-title")!;
  const newTodoTitle = inputNewTodoTitle.value;

  if (todosList) {
    todosList.innerHTML += `<li>${newTodoTitle}</li>`;
  }

  console.log(newTodoTitle);
});

import "./style.css";

const newTodoForm = document.querySelector("#new-todo-form");

newTodoForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("test");
});

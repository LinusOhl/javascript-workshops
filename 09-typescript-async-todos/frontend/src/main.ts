import { ITodo } from "./interfaces";
import { fetchTodos, createTodo } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todoForm = document.querySelector("#new-todo-form");
// const todosEl = document.querySelector("#todos");

let todos: ITodo[] = [];

const renderTodos = () => {
  // render not completed todos
  document.querySelector("#todos")!.innerHTML = todos
    .filter((todo) => !todo.completed)
    .map(
      (todo) => `
        <li class="list-group-item ${
          todo.completed ? "completed" : ""
        }" data-todo-id="${todo.id}">
          ${todo.title}
        </li>
      `
    )
    .join("");

  // render completed todos
  document.querySelector("#completedTodos")!.innerHTML = todos
    .filter((todo) => todo.completed)
    .map(
      (todo) => `
        <li class="list-group-item ${
          todo.completed ? "completed" : ""
        }" data-todo-id="${todo.id}">
          ${todo.title}
        </li>
      `
    )
    .join("");
};

// get todos from server, update todos-array & render todos
const getTodos = async () => {
  // fetch todos from server
  todos = await fetchTodos();

  // render todos
  renderTodos();
};

todoForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTodoTitle = (document.querySelector("#newTodo") as HTMLInputElement)
    ?.value;

  if (!newTodoTitle) {
    alert("Not a todo.");
    return;
  }

  const maxId = Math.max(...todos.map((todo) => todo.id));

  // create a new todo
  const newTodo: ITodo = {
    id: maxId + 1,
    title: newTodoTitle,
    completed: false,
  };

  // POST todo to server
  await createTodo(newTodo);

  // get todos from server
  getTodos();
});

// todosEl?.addEventListener("click", (e) => {
//   let target = e.target as HTMLElement;

//   if (target.tagName === "LI") {
//     const todoId = Number(target.dataset.todoId);
//     console.log(todoId);

//     for (let i = 0; i < todos.length; i++) {
//       if (todos[i].id === todoId) {
//         todos[i].completed = !todos[i].completed;
//       }
//     }
//   }

//   renderTodos();
// });

getTodos();

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const newTodoForm = document.querySelector("#new-todo-form");
const todosList = document.querySelector("#todos")!;

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// List of todos
const json = localStorage.getItem("todos") ?? "[]";
const todos: Todo[] = JSON.parse(json);

// render todos
const renderTodos = () => {
  todosList.innerHTML = todos
    .map(
      (todo) =>
        `<li class="list-group-item ${
          todo.completed ? "completed" : ""
        }" data-todo-id="${todo.id}">${todo.title}</li>`
    )
    .join("");
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// create new todo
newTodoForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodoTitle =
    document.querySelector<HTMLInputElement>("#new-todo-title")?.value || "";

  if (newTodoTitle.length < 3) {
    alert("Too short todo.");
    return;
  }

  // const todoIds = todos.map((todo) => todo.id);
  // const maxId = Math.max(...todoIds);

  // same as above
  const maxId = Math.max(0, ...todos.map((todo) => todo.id));

  const newTodo: Todo = {
    id: maxId + 1,
    title: newTodoTitle,
    completed: false,
  };

  todos.push(newTodo);

  saveTodos();

  document.querySelector<HTMLInputElement>("#new-todo-title")!.value = "";

  //render todos
  renderTodos();
});

todosList.addEventListener("click", (e) => {
  let el = e.target as HTMLElement;

  if (el.tagName === "LI") {
    const todoId = Number(el.dataset.todoId);

    // set to opposite boolean (true = false && false = true)
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
        todos[i].completed = !todos[i].completed;

        saveTodos();
      }
    }
  }

  renderTodos();
});

// render todos
renderTodos();

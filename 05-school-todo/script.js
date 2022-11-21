/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector("#todos");
const newTodoFormEl = document.querySelector("#new-todo-form");

// list of todos
const todos = [
  {
    id: 1,
    title: "Learn basic JavaScript",
    completed: true,
  },
  {
    id: 2,
    title: "Learn DOM",
    completed: false,
  },
  {
    id: 3,
    title: "Take over the world",
    completed: false,
  },
];

// Render todos to DOM
const renderTodos = () => {
  todosEl.innerHTML = "";
  todos.forEach((todo) => {
    let cssClasses = "list-group-item";
    if (todo.completed) {
      cssClasses += " completed";
    }

    todosEl.innerHTML += `
      <li class="${cssClasses}" data-todo-id="${todo.id}">
        ${todo.title}
      </li>
    `;
  });
};
renderTodos();

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener("click", (e) => {
  // check if user clicked on a LI element
  if (e.target.tagName === "LI") {
    const todoId = Number(e.target.dataset.todoId);
    console.log(todoId);

    // search todos for the todo with the title clickedTodoTitle
    const clickedTodo = todos.find((todo) => {
      return todo.id === todoId;
    });

    // change completed-status of found todo
    clickedTodo.completed = !clickedTodo.completed;

    // render updated todos
    renderTodos();
  }
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener("submit", (e) => {
  // Prevent form from being submitted (to the server)
  e.preventDefault();

  // Create and push new todo into array
  todos.push({
    id: todos.length + 1,
    title: newTodoFormEl.newTodo.value,
    completed: false,
  });
  console.log("created new todo...");

  // Render new todo to DOM
  renderTodos();

  // Reset form
  newTodoFormEl.reset();
});

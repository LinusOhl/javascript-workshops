/**
 * Async Todos
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
let todos = [];

const createNewTodo = async (data) => {
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    alert("No work.");
    console.log(response);
    return;
  }

  return await response.json();
};

const getTodos = async () => {
  const data = await fetchTodos();

  todos = data;

  renderTodos();
};

const fetchTodos = async () => {
  const response = await fetch("http://localhost:3001/todos");

  if (!response.ok) {
    throw new Error(
      `Could not fetch todos: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
};

// Render todos to DOM
const renderTodos = () => {
  const lis = todos.map((todo) => {
    let cssClasses = "list-group-item";

    if (todo.completed) {
      cssClasses += " completed"; // "list-group-item completed"
    }

    return `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;
  });

  todosEl.innerHTML = lis.join("");
};

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener("click", (e) => {
  // check if user clicked on a LI element
  if (e.target.tagName === "LI") {
    // get the `data-todo-id` attribute from the LI element
    const clickedTodoId = e.target.dataset.todoId; // `data-todo-id`

    // search todos for the todo with the id todoId
    const clickedTodo = todos.find((todo) => {
      return todo.id == clickedTodoId;
    });

    // change completed-status of found todo
    clickedTodo.completed = !clickedTodo.completed;

    // render updated todos
    renderTodos();
  }
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener("submit", async (e) => {
  // Prevent form from being submitted (to the server)
  e.preventDefault();

  // Create new todo
  const newTodo = {
    title: newTodoFormEl.newTodo.value,
    completed: false,
  };

  try {
    await createNewTodo(newTodo);
  } catch (e) {
    console.log(e);
    alert(e);
  }

  getTodos();

  // Empty input field
  newTodoFormEl.newTodo.value = "";
});

getTodos();

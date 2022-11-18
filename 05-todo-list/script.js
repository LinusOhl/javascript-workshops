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
const clearButton = document.querySelector("#clearButton");
let checkedItem;
let itemText;
let editButton;

// list of todos
let todos = [
  {
    title: "Learn basic JavaScript",
    completed: true,
  },
  {
    title: "Learn DOM",
    completed: false,
  },
  {
    title: "Take over the world",
    completed: false,
  },
];

// clears the <ul> and renders the todos to the page
const renderTodos = () => {
  todosEl.innerHTML = "";
  todos.forEach((todo) => {
    if (todo.completed === true) {
      todosEl.innerHTML += `
      <li class="list-group-item listItem">
        <div class="rightSide">
          <div class="form-check checkBorder">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked
            />
          </div>
          <span class="completed" id="itemContent">${todo.title}</span>
        </div>
        <button class="btn btn-secondary" id="editButton">Edit</button>
      </li>`;
    } else {
      todosEl.innerHTML += `
      <li class="list-group-item listItem">
        <div class="rightSide">
          <div class="form-check checkBorder">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <span id="itemContent">${todo.title}</span>
        </div>
        <button class="btn btn-secondary" id="editButton">Edit</button>
      </li>`;
    }
  });
  checkedItem = document.querySelector("#flexSwitchCheckDefault");
  itemText = document.querySelector("#itemContent");
  editButton = document.querySelector("#editButton");
};
renderTodos();

// adds new todo
const addTodo = () => {
  todos.push({
    title: newTodoFormEl.newTodo.value,
    completed: false,
  });

  renderTodos();

  newTodoFormEl.reset();
};

// prevents the page from refreshing when clicking "create"
newTodoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
});

// adds addTodo-function to the create button
newTodoFormEl.addEventListener("submit", addTodo);

// checks if todo is completed or not
todosEl.addEventListener("click", (e) => {
  for (let i = 0; i < todos.length; i++) {
    if (e.target.tagName === "INPUT") {
      let target = e.target.parentNode.parentNode.childNodes[3];
      if (target.innerHTML === todos[i].title) {
        if (e.target.checked) {
          todos[i].completed = true;
          console.log("checked");
        } else {
          todos[i].completed = false;
          console.log("unchecked");
        }
      }
    }
  }
  renderTodos();
});

// change todo
todosEl.addEventListener("click", (e) => {
  for (let i = 0; i < todos.length; i++) {
    if (e.target.tagName === "BUTTON") {
      let target = e.target.parentNode.childNodes[1].childNodes[3];
      if (target.innerHTML === todos[i].title) {
        let _temp = todos[i].title;
        todos[i].completed = false;
        todos[i].title = prompt("Change todo", todos[i].title);
        if (todos[i].title === "" || todos[i].title === null) {
          todos[i].title = _temp;
        }
      }
    }
  }
  renderTodos();
});

// clears todo list
const clearList = () => {
  todos = [];

  renderTodos();
};

clearButton.addEventListener("click", clearList);

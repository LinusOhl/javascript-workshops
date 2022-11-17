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
const submitField = document.querySelector("#newTodo");

// list of todos
const todos = [
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

// loops through todos and displays them on the page, if the todo is completed then it's grayed out
todos.forEach((todo) => {
  if (todo.completed === true) {
    todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
  } else {
    todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
  }
});

// adds new todo
const addTodo = () => {
  todos.push({
    title: submitField.value,
    completed: false,
  });

  todosEl.innerHTML += `<li class="list-group-item">${submitField.value}</li>`;

  submitField.value = "";
};

// prevents the page from refreshing when clicking "create"
newTodoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
});

// adds addTodo-function to the create button
newTodoFormEl.addEventListener("submit", addTodo);

// adds the ability to click the todos in the list to mark them as completed
todosEl.addEventListener("click", (e) => {
  for (let i = 0; i < todos.length; i++) {
    if (e.target.innerHTML === todos[i].title && todos[i].completed === false) {
      todos[i].completed = true;
      e.target.classList.toggle("completed");

      console.log(todos[i]);
    } else if (
      e.target.innerHTML === todos[i].title &&
      todos[i].completed === true
    ) {
      todos[i].completed = false;
      e.target.classList.toggle("completed");

      console.log(todos[i]);
    }
  }
});

/**
 * XMLHttpRequest
 *
 */

const app = document.querySelector("#app");
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let todos = JSON.parse(request.responseText);

    todos.forEach((todo) => {
      app.innerHTML += `
        <div class="card mb-2">
          <div class="card-body">
            ${todo.title}
          </div>
        </div>
      `;
    });
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

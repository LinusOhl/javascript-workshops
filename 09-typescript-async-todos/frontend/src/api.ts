import { ITodo } from "./interfaces";

// post todo to server
export const createTodo = async (newTodo: ITodo) => {
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return (await response.json()) as ITodo;
};

// fetch todos from server
export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3001/todos");

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return (await response.json()) as ITodo[];
};

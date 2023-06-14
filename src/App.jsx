import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  function handleSubmit(e) {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2);
    const todo = { id, title, description, status: false };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.reload();
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Add new todo</h1>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Enter the todo title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={description}
          name="description"
          placeholder="Enter the todo description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add new todo</button>
      </form>
      <div className="container">
        {todos.length === 0 ? (
          <h3>Database is empty</h3>
        ) : (
          todos.map((todo) => (
            <Todo
              title={todo.title}
              description={todo.description}
              key={todo.id}
              id={todo.id}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;

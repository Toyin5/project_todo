import { useState } from "react";

const Todo = ({ title, description, id }) => {
  const [status, setStatus] = useState(false);
  function handleChange() {
    setStatus(!status);
    const todos = JSON.parse(localStorage.getItem("todos"));
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    console.log(id);
    todos.splice(index, 1, {
      id,
      title,
      description,
      status: !status,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleDelete() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    console.log(id);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <div className="todo-component">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <button onClick={handleChange}>toggle</button>
      <button onClick={handleDelete}>delete</button>
      <h5>{status ? "Completed" : "Pending"}</h5>
    </div>
  );
};

export default Todo;

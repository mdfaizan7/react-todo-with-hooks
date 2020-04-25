import React, { useState } from "react";
import Todo from "./components/Todo";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      task: "Lets start",
    },
  ]);

  const [formText, setFormText] = useState("");

  const addTodo = (formText) => {
    console.log(formText);
    const newTodos = [...todos, { task: formText }];
    setTodos(newTodos);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formText.trim() === "") return;
    addTodo(formText);
    setFormText("");
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted) {
      newTodos[index].isCompleted = false;
    } else {
      newTodos[index].isCompleted = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            completeTodo={completeTodo}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
        <form onSubmit={onSubmit}>
          <input
            className="form"
            type="text"
            placeholder="Enter your todos here"
            value={formText}
            onChange={(e) => {
              setFormText(e.target.value);
            }}
          />
          <button
            style={{
              marginTop: "20px",
            }}
            type="submit"
            className="button"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

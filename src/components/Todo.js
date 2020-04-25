import React from "react";

const Todo = ({ todo, completeTodo, index, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.task}

      <button
        className="button"
        style={{ backgroundColor: "rgb(218, 74, 74)" }}
        onClick={() => deleteTodo(index)}
      >
        delete
      </button>
      <button className="button" style={{}} onClick={() => completeTodo(index)}>
        complete
      </button>
    </div>
  );
};

export default Todo;

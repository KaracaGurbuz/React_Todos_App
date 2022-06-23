import React from "react";
function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;

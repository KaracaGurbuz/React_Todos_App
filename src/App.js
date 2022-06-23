import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    { text: "JavaScript Çalış", completed: false, id: Math.random() * 1000 },
    { text: "React Ödevini Yap", completed: false, id: Math.random() * 1000 },
    { text: "Golang Araştır", completed: false, id: Math.random() * 1000 },
  ]);
  console.log(todos);
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <Form todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (text: string) => { 
    setTodos((prevTodos) => [...prevTodos, {id: 'id', text: text}])
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo}/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;

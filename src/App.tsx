import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (text: string) => { 
    setTodos((prevTodos) => [...prevTodos, {id: new Date().toISOString(), text: text}])
  }

  const deleteHandler = (id: string) => {
    console.log('id', id);
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo}/>
      <Todos onRemoveTodo={deleteHandler} items={todos}/>
    </div>
  );
}

export default App;

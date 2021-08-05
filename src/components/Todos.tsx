import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css';
const Todos: React.FC<{todos: Todo[]}> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.todos.map((todo: Todo) => {
				return <TodoItem key={todo.text} todo={todo}/>
			})}
		</ul>
	)
}
export default Todos
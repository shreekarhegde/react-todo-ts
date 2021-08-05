import React from 'react'
import Todo from '../models/todo'
import classes from './TodoItem.module.css';
const TodoItem:React.FC<{todo: Todo}> = (props) => {
	return (
		<div className={classes.item}>
			<li key={props.todo.text}>{props.todo.text}</li>
		</div>
	)
}

export default TodoItem
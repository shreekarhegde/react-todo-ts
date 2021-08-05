import React from 'react'
import { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

	const todoTextRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = todoTextRef.current?.value;
		if(!enteredText) return;
		props.onAddTodo(enteredText);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextRef}/>
			<button>Submit</button>
		</form>
	)
}
export default NewTodo;
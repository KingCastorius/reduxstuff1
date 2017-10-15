import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'RESET':
			return state = 0
		default:
			return state
	}   
}

const store = createStore(reducer)

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>UP DAWG!</button>
		<button onClick={onReset}>RESET DAWG!</button>
		<button onClick={onDecrement}>DOWN DAWG!</button>
	</div>
)

const reactor = () => {
	render(
		<Counter  
			value={ store.getState() }  
			onIncrement={ () => store.dispatch({type: 'INCREMENT'}) }
			onReset={ () => store.dispatch({type: 'RESET'}) }
			onDecrement={ () => store.dispatch({type: 'DECREMENT'}) } />,
		document.getElementById('root')	
	)
}

reactor();
store.subscribe(reactor)

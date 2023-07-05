import React from "react";
import { useReducer } from "react";

type Action = "decrement" | "increment" | "double" | "reset"

const reducer = (currentCount: number, action: Action) => {
	switch (action) {
		case 'decrement':
			return currentCount - 1
		case 'increment':
			return currentCount + 1
		case 'double':
			return currentCount * 2
		case 'reset':
			return 0
		default:
			return currentCount
	}
}

type CounterProps = {
	initialvalue: number
}


const Counter = (props: CounterProps)=> {
	const {initialvalue} = props
	const [count, dispatch] = useReducer(reducer, initialvalue)
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => dispatch('decrement')}>-</button>
			<button onClick={() => dispatch('increment')}>+</button>
			<button onClick={() => dispatch('double')}>*</button>
			<button onClick={() => dispatch('reset')}>0</button>
		</div>
	)
}
const Test = () => {

	return <Counter initialvalue={0}/>
}
export default Test;

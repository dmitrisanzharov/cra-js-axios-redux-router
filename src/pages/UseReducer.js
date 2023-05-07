import React, { useReducer } from "react";

const UseReducer = () => {
	// ! see docs in here: https://legacy.reactjs.org/docs/hooks-reference.html#usereducer

	const ACTION_TYPES = {
		add: "ADD",
		reset: "RESET",
		minus: "MINUS",
	};

	const reducer = (state, action) => {
		if (action.type === "ADD") {
			console.log(action.payload.text);
			return { count: state.count + 1 };
		}

		throw new Error("omg there was no type or payload");
	};

	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div>
			<h1>useReducer</h1>
			<h2>this is count: {state.count}</h2>
			<button
				onClick={() =>
					dispatch({ type: ACTION_TYPES.add, payload: { text: "increased" } })
				}
			>
				+
			</button>
		</div>
	);
};

export default UseReducer;

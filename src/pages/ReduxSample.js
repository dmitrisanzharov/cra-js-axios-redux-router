import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { inc, dec, randomFun } from "../redux/mainStore";

const ReduxSample = () => {
	// ! structure is:  state.nameOfStoreFromConfig.nameOfStateFromStoreDefaultState
	let count = useSelector((state) => state.mainStore.count);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>ReduxSample</h1>
			<h3>This is count: {count}</h3>
			<button onClick={() => dispatch(inc())}>+</button>
			<button onClick={() => dispatch(dec())}>-</button>
			<button
				onClick={() =>
					dispatch(randomFun("some random message, which will be in action"))
				}
			>
				trigger random Function from store
			</button>
		</div>
	);
};

export default ReduxSample;

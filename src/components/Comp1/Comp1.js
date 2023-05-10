import React, {
	useEffect,
	useState,
	useReducer,
	useMemo,
	useCallback,
} from "react";
import Comp2 from "../Comp2/Comp2";

const Comp1 = (props) => {
	const [count, setCount] = useState(0);

	const myObj = {
		name: "la",
	};

	useEffect(() => {
		console.log("runs");
	}, [myObj]);

	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
		</>
	);
};

export default Comp1;

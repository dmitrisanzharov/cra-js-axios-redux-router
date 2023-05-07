import React, { useEffect, useState } from "react";

const UseStateAndUseEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("count has changed");
	}, [count]);

	return (
		<div>
			<h1>UseStateAndUseEffect</h1>
			<h2>this is count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(0)}>reset</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
};

export default UseStateAndUseEffect;

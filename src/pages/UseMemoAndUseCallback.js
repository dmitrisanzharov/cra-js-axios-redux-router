import React, { useEffect, useState, useMemo, useCallback } from "react";

const UseMemoAndUseCallback = () => {
	// ! useCallback when I am CALLING the function, when I just need return value, then use useMemo
	// ! useMemo runs BEFORE component is painted, so I can use it to display sht

	const [count, setCount] = useState(0);

	let myVar;

	const obj = useMemo(
		() => ({
			name: "omg",
		}),
		[]
	);

	const callSlowFunction = useCallback(slowFunction, []);

	useEffect(() => {
		console.log("object does NOT change with every re-render");
		console.log("slow function is NOT being called on every re-render");
	}, [obj]);

	useMemo(() => {
		myVar =
			"my var is now defined and is usable in Template, even though it was undefined BEFORE the template loaded";
	}, []);

	return (
		<div>
			<h1>UseMemoAndUseCallback</h1>
			<h3>this is count: {count}</h3>
			<button onClick={() => setCount(count + 1)}>add to count</button>
			<button onClick={callSlowFunction}>call slow function</button>
			<h3 style={{ color: "red" }}>this is myVar: {myVar}</h3>
		</div>
	);
};

function slowFunction(num) {
	console.log("Calling slow function");
	for (let i = 0; i <= 1000000000; i++) {}
	console.log("for loop finished");
	return num * 2;
}

export default UseMemoAndUseCallback;

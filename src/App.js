import React, { useEffect, useState, useMemo, memo } from "react";
import "./App.css";
import { useBlah2Query, useBlah1Query } from "./redux/api/mainApi";
import { getData, getDataById } from "./helper/getData";

const Child = memo(({ count }) => {
	const data = useBlah1Query();
	console.log("data from redux: ", data.data);

	const dataId = useBlah2Query(2);
	console.log("dataId from redux: ", dataId.data);

	return (
		<>
			<hr />
			<h1>Child</h1>
			<h2>Count: {count}</h2>
		</>
	);
});

function App() {
	const [input, setInput] = useState("");
	const [reCount, setReCount] = useState(0);
	const [data, setData] = useState(null);

	async function fetchData(fetchType, id) {
		if (fetchType === "id") {
			let res = await getDataById(id);
			console.log("res from axios: ", res);
			setData(res);
		}

		// default
		let res = await getData();
		console.log("res from axios: ", res);
		setData(res);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="addPadding">
			<hr />
			<h1>Input</h1>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => setReCount(reCount + 1)}>re-render child</button>
			<button onClick={() => fetchData("id", 3)}>re-render axios</button>

			<Child count={reCount} />
		</div>
	);
}

export default App;

import "./App.css";
import React, { useEffect, useState, useMemo } from "react";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";

// view
import obj1 from "./view/obj1";

function App() {
	const [reRender, setRerender] = useState(0);

	function handleToggle(decision) {
		let finalObj = JSON.parse(sessionStorage.getItem("obj1"));
		finalObj.concent = decision;
		sessionStorage.setItem("obj1", JSON.stringify(finalObj));
		setRerender(reRender + 1);
	}

	useMemo(() => {
		let test1 = sessionStorage.getItem("obj1");
		console.log("test1: ", test1);

		if (test1) {
			console.log("present");
			return;
		}

		sessionStorage.setItem("obj1", JSON.stringify(obj1));
	}, []);

	return (
		<div className="addPadding">
			<h1>cookies</h1>
			{JSON.parse(sessionStorage.getItem("obj1")).info}
			<br />
			<button
				onClick={() => handleToggle(true)}
				style={
					JSON.parse(sessionStorage.getItem("obj1")).concent
						? {
								backgroundColor: "green",
						  }
						: null
				}
			>
				agree
			</button>{" "}
			<button
				onClick={() => handleToggle(false)}
				style={
					JSON.parse(sessionStorage.getItem("obj1")).concent === false
						? { backgroundColor: "red" }
						: null
				}
			>
				disagree
			</button>
		</div>
	);
}

export default App;

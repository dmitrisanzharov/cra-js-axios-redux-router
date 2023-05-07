import React from "react";
import { UseContext, useGlobal } from "./UseContext";

const UseContextSampleUse = () => {
	return (
		<UseContext>
			<SampleUse />
		</UseContext>
	);
};

function SampleUse() {
	const { name, contextConsoleLog } = useGlobal();

	return (
		<div>
			<h1>
				Here is NAME variable from context:{" "}
				<span style={{ color: "red" }}>{name}</span>
			</h1>
			<button onClick={contextConsoleLog}>
				here we can call contextFunction
			</button>
		</div>
	);
}

export default UseContextSampleUse;

import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp2.css";

const Comp2 = () => {


	React.useEffect(() => {
		let test = document.querySelector("#hw1");
		console.log("test: ", test);

		// CONCLUSION IT CAN SEE THE DOM
	}, []);



	return <div className="Comp2">Comp2</div>;
};

export default Comp2;

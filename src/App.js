import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";

function App() {
	// INLINE STYLE example
	const [show, setShow] = useState(false);

	const style1 = {
		transform: `scaleY(${show ? 1 : 0})`,
		transformOrigin: "top",
		transition: "1s ease",
	};

	// useRef example
	const [showUseRef, setShowUseRef] = useState(false);
	const dropDown2 = useRef();

	useEffect(() => {
		dropDown2.current.style.transition = "transform 1s ease";
		dropDown2.current.style.transformOrigin = "top";
		dropDown2.current.style.transform = `scaleY(${showUseRef ? 1 : 0})`;
	}, [showUseRef]);

	// CSS example
	const [cssShow, setCssShow] = useState(false);

	return (
		<div className="addPadding appContainer">
			<h1 style={{ color: "red" }}>
				There is NO way to do it, by swapping class via state changes - this is
				because when component unmounts, it will REMOVE previous class and
				replace it with new class, so transition is SKIPPED
			</h1>
			<h3 style={{ color: "green" }}>There are only 4 ways to do it: </h3>
			<ul>
				<li>Inline: by directly manipulating values</li>
				<li>
					useRef: i.e. targeting the div and directing manipulating style
					properties 'similar to inline, only without inline styling, but
					principle is the same'
				</li>

				<li>
					CSS: by using checkbox and ~ selector, direct decedent: ref:
					https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css
				</li>
				<hr />
				<li>
					{"(NOT COVERED) "}Framework: React Transition Group{" "}
					<a
						href="https://reactcommunity.org/react-transition-group/css-transition"
						target="_blank"
						rel="noreferrer"
					>
						link
					</a>
				</li>
				<li>
					{"(NOT COVERED) "}Framework: gsap{" "}
					<a
						href="https://www.youtube.com/watch?v=8V0djEq16zI"
						target="_blank"
						rel="noreferrer"
					>
						link
					</a>
				</li>
			</ul>

			<hr />
			{/* --------------------------------------------- */}
			{/* ----------INLINE DEMO------------------ */}
			{/* --------------------------------------------- */}
			<h1>Inline Style</h1>
			<button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>

			<div className="appContainer_DropDown" style={style1}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
				debitis nostrum odit praesentium. Magni culpa porro minus blanditiis
				quam officiis?
			</div>

			<hr />

			{/* --------------------------------------------- */}
			{/* --------- useRef DEMO------------------ */}
			{/* --------------------------------------------- */}

			<h1>useRef - not very good, needs work</h1>

			<button onClick={() => setShowUseRef(!showUseRef)}>
				{showUseRef ? "-" : "+"}
			</button>

			<div className="appContainer_DropDown2" ref={dropDown2}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
				debitis nostrum odit praesentium. Magni culpa porro minus blanditiis
				quam officiis?
			</div>

			<hr />

			{/* --------------------------------------------- */}
			{/* --------- css DEMO------------------ */}
			{/* --------------------------------------------- */}

			<div className="Css_Demo_Div1">
				<h1>CSS demo</h1>

				<div className="inputBox">
					<input type="checkbox" onChange={() => setCssShow(!cssShow)} />
					<span>{cssShow ? "-" : "+"}</span>
					<div className="appContainer_DropDown3">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
						debitis nostrum odit praesentium. Magni culpa porro minus blanditiis
						quam officiis?
					</div>
				</div>
			</div>

			{/* end of main container */}
		</div>
	);
}

export default App;

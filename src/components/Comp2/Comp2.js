import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp2.css";
import classNames from "classnames";

const Comp2 = () => {
	const slider = useRef();

	const [isDown, setIsDown] = useState(false); // this controls application of ACTIVE CLASS
	const [startX, setStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(null);
	const [dummyRe, setDummyRe] = useState(0);

	// functions
	function handleMouseDown(e) {
		setIsDown(true);
		// we use   e.pageX and element.offsetLeft to capture initial position of the mouse click WITHIN the container, we are using Mouse Position - LeftOffset, so this will tell us exactly the X position of the Mouse INSIDE the container
		setStartX(e.pageX - slider.current.offsetLeft); // this can also be written as: console.log("easier replacer", e.clientX - slider.current.offsetLeft);

		// here we initialise Scroll Left, but this might NOT be needed, since I am using react - and this value is a DIRECTIVE to take action and move, so I dunno what is this;
		setScrollLeft(slider.current.scrollLeft);
		// console.log("what is this?", slider.current.scrollLeft);
	}

	function handleMouseMove(e) {
		if (!isDown) {
			return;
		}

		// e.preventDefault(); // do I really need this here?

		console.log("triggered");
		// by how much did my mouse move?
	}

	// useEffects
	// useEffect(() => {
	// 	console.log("isDown state", isDown);
	// 	console.log("startX: ", startX);
	// 	console.log("scrollLeft: ", scrollLeft);
	// }, [isDown, startX, scrollLeft]);

	return (
		<div className="container drr">
			<h1>Click And Drag</h1>

			<div
				className={classNames("itemsContainer dbb", {
					itemsContainer_active: isDown,
				})}
				ref={slider}
				onMouseDown={(e) => handleMouseDown(e)}
				onMouseUp={() => setIsDown(false)}
				onMouseLeave={() => setIsDown(false)} // we NEED this event otherwise if I leave my mouse, I will have to RE-CLICK the itemsContainer to stop it from being active
				onMouseMove={(e) => handleMouseMove(e)}
			>
				<div className="item">01</div>
				<div className="item">02</div>
				<div className="item">03</div>
				<div className="item">04</div>
				<div className="item">05</div>
				<div className="item">06</div>
				<div className="item">07</div>
				<div className="item">08</div>
				<div className="item">09</div>
				<div className="item">10</div>
				<div className="item">11</div>
				<div className="item">12</div>
				<div className="item">13</div>
				<div className="item">14</div>
				<div className="item">15</div>
				<div className="item">16</div>
				<div className="item">17</div>
				<div className="item">18</div>
				<div className="item">19</div>
				<div className="item">20</div>
				<div className="item">21</div>
				<div className="item">22</div>
				<div className="item">23</div>
				<div className="item">24</div>
				<div className="item">25</div>
			</div>
		</div>
	);
};

export default Comp2;

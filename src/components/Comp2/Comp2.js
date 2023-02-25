import React, { useEffect, useState, useRef } from "react";
import "./Comp2.css";
import classNames from "classnames";

const Comp2 = () => {
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeftState, setScrollLeftState] = useState(null);
	const [mouseMoved, setStateMouseMoved] = useState(0);

	const itemsContainer = useRef();

	// functions
	function handleMouseDown(e) {
		setIsDown(true);

		if (e.pageX === undefined) {
			setStartX(e.touches[0].pageX - itemsContainer.current.offsetLeft);
		} else {
			setStartX(e.pageX - itemsContainer.current.offsetLeft);
		}

		setScrollLeftState(itemsContainer.current.scrollLeft);
		setStateMouseMoved(0);
	}

	function handleMouseMove(e) {
		if (!isDown) {
			return;
		}

		const currentMousePositionInsideContainer =
			e.pageX === undefined
				? e.touches[0].pageX - itemsContainer.current.offsetLeft
				: e.pageX - itemsContainer.current.offsetLeft;

		setStateMouseMoved(currentMousePositionInsideContainer - startX);
	}

	useEffect(() => {
		itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
	}, [scrollLeftState, mouseMoved]);

	return (
		<div className="MainContainer">
			<h1>Draggable</h1>

			{/* main code */}
			<div
				className={classNames("ItemsContainer", { activeClass: isDown })}
				ref={itemsContainer}
				// MOUSE EVENTS
				onMouseDown={(e) => handleMouseDown(e)}
				onMouseUp={() => setIsDown(false)}
				onMouseLeave={() => setIsDown(false)}
				onMouseMove={(e) => handleMouseMove(e)}
				// TOUCH EVENTS
				onTouchStart={(e) => handleMouseDown(e)}
				onTouchEnd={() => setIsDown(false)}
				onTouchCancel={() => setIsDown(false)}
				onTouchMove={(e) => handleMouseMove(e)}
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

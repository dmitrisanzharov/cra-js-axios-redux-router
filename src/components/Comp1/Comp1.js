import React, { useEffect, useState, useRef } from "react";
import "./Comp1.css";
import data from "./data";
import classNames from "classnames";

const Comp1 = () => {
	const [idxOfVisible, setIdxOfVisible] = useState(0);
	const [direction, setDirection] = useState("");
	const [disableBtn, setDisableBtn] = useState(false);

	// states for the move thing
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(null);

	const sliderBox = useRef();

	// FUNCTIONS

	function handleMouseDown(e) {
		console.log("triggered");
		setIsDown(true);
		setStartX(e.pageX - sliderBox.offsetLeft); // this registers where the mouse was clicked and START of dragging
	}

	// useEffects

	useEffect(() => {
		// console.log("idxOfVisible", idxOfVisible);

		if (idxOfVisible === 5) {
			const timeOut = setTimeout(() => {
				setIdxOfVisible(1);
				setDisableBtn(false);
			}, 501);
			return () => clearTimeout(timeOut);
		}

		if (idxOfVisible === 0) {
			const timeOut = setTimeout(() => {
				setIdxOfVisible(4);
				setDisableBtn(false);
			}, 501);
			return () => clearTimeout(timeOut);
		}

		const timeOut = setTimeout(() => {
			setDisableBtn(false);
		}, 501);
		return () => clearTimeout(timeOut);
	}, [idxOfVisible]);

	// working on the move by hand thing

	useEffect(() => {
		console.log(sliderBox.current);

		sliderBox.current.addEventListener("mousedown", handleMouseDown, {
			once: true,
		});
	}, []);

	return (
		<div className="mainContainer drr">
			<div>
				<button
					onClick={() => {
						setIdxOfVisible(idxOfVisible - 1);
						setDirection("left");
						setDisableBtn(true);
					}}
					disabled={disableBtn}
				>
					left
				</button>
				<button
					onClick={() => {
						setIdxOfVisible(idxOfVisible + 1);
						setDirection("right");
						setDisableBtn(true);
					}}
					disabled={disableBtn}
				>
					right
				</button>
				<hr />
			</div>

			<div className="frame dbb">
				<div
					className={classNames("sliderBox dyy", {
						// classname : condition
						"noAnimation--yes":
							(idxOfVisible === 4 && direction === "left") ||
							(idxOfVisible === 1 && direction === "right"),
					})}
					style={{ transform: `translateX(${idxOfVisible * -292}px)` }}
					ref={sliderBox}
					draggable="true"
				>
					{data?.map((el, i) => {
						const { name, image } = el;
						return (
							<div
								className="singleItem"
								key={name + i}
								style={{ backgroundImage: `url(${image})` }}
							></div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Comp1;

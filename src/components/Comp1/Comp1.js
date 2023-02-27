import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import classNames from "classnames";

const Comp1 = () => {
	const singleItemWidth = 400;

	const [translateAmount, setTranslateAmount] = useState(singleItemWidth);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [mouseMoved, setMouseMoved] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const [count, setCount] = useState(1);
	const [directionButtonClicked, setDirectionButtonClicked] = useState("");
	const [sliderArr, setSliderArr] = useState([5, 1, 2, 3, 4, 5, 1]);
	const [stopAnime, setStopAnime] = useState(false);

	// functions
	function handleMouseDown(e) {
		setIsDown(true);
		setStartX(e.clientX);
		setCurrentTranslate(translateAmount); //! issue could be here
		setMouseMoved(0);
		setStopAnime(false);
	}

	function handleMouseUp(e) {
		setIsDown(false);
		setCurrentTranslate(translateAmount);
		// handleTranstionAfterMouseMove();
	}

	function handleMouseLeave(e) {
		setIsDown(false);
		// setMouseMoved(0);
		// setCurrentTranslate(translateAmount);
		// handleTranstionAfterMouseMove();
	}

	function handleMouseMove(e) {
		if (isDown === false) {
			return;
		}

		const mouseMovedVar = e.clientX - startX;
		setMouseMoved(mouseMovedVar);
	}

	function handleTranstionAfterMouseMove() {
		// console.log("is down", isDown);

		// tests
		const movedRight = mouseMoved > 0;

		const movedLeft = mouseMoved < 0;

		const movedRightAndBiggerThanHalf = mouseMoved >= singleItemWidth / 2;

		const movedLeftAndBiggerThanHalf = mouseMoved < singleItemWidth / -2;

		// console.log("movedRight: ", movedRight);
		// console.log("movedLeft: ", movedLeft);
		// console.log("movedRightAndBiggerThanHalf: ", movedRightAndBiggerThanHalf);
		// console.log("movedLeftAndBiggerThanHalf: ", movedLeftAndBiggerThanHalf);

		if (movedRight && movedRightAndBiggerThanHalf) {
			console.log("a");
			setCount(count - 1);
			return;
		}

		if (movedRight && !movedRightAndBiggerThanHalf) {
			console.log("b");
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		if (movedLeft && movedLeftAndBiggerThanHalf) {
			console.log("c");
			setCount(count + 1);
			return;
		}

		if (movedLeft && !movedLeftAndBiggerThanHalf) {
			console.log("d");
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		setTranslateAmount(count * singleItemWidth);
	}

	function handleTranstionEnd() {
		// console.log("count", count);
		setStopAnime(true);

		if (count === 0) {
			setCount(5);

			return;
		}

		if (count === 6) {
			setCount(1);

			return;
		}
	}

	useEffect(() => {
		setTranslateAmount(currentTranslate - mouseMoved);
	}, [mouseMoved]);

	useEffect(() => {
		// console.log(count);
		setTranslateAmount(count * singleItemWidth);
	}, [count]);

	useEffect(() => {
		handleTranstionAfterMouseMove();
	}, [isDown]);

	return (
		<div className="Comp1 drr">
			<div>
				<button
					onClick={(e) => {
						setCount(count - 1);
						setDirectionButtonClicked("left");
						setStopAnime(false);
					}}
				>
					left
				</button>
				<button
					onClick={(e) => {
						setCount(count + 1);
						setDirectionButtonClicked("left");
						setStopAnime(false);
					}}
				>
					right
				</button>
			</div>
			<hr />
			<div
				className="itemsHolder dbb"
				onMouseDown={(e) => handleMouseDown(e)}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				onMouseMove={(e) => handleMouseMove(e)}
			>
				<div
					className={classNames("itemsString", {
						"itemsString--NoTransition": isDown || stopAnime,
					})}
					style={{ transform: `translateX(${translateAmount * -1}px)` }}
					onTransitionEnd={handleTranstionEnd}
				>
					{sliderArr.map((el, i) => {
						return (
							<div key={el + i} className="item">
								0{el}
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<button
					className={classNames({ buttonActive: count === 1 || count === 6 })}
				>
					1
				</button>
				<button className={classNames({ buttonActive: count === 2 })}>2</button>
				<button className={classNames({ buttonActive: count === 3 })}>3</button>
				<button className={classNames({ buttonActive: count === 4 })}>4</button>
				<button
					className={classNames({ buttonActive: count === 5 || count === 0 })}
				>
					5
				</button>
			</div>
		</div>
	);
};

export default Comp1;

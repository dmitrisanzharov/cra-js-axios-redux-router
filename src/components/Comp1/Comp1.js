import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import classNames from "classnames";

const Comp1 = () => {
	const singleItemWidth = 400;

	const [sliderArr, setSliderArr] = useState([5, 1, 2, 3, 4, 5, 1]);
	const [translateAmount, setTranslateAmount] = useState();

	// states for hand move
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const [mouseMoved, setMouseMoved] = useState(0);
	// states for buttons
	const [count, setCount] = useState(1);
	const [stopAnime, setStopAnime] = useState(false);
	const [btnDisable, setBtnDisable] = useState(false);

	// functions
	function handleMouseDown(e) {
		setIsDown(true);
		setStartX(e.clientX);
		setCurrentTranslate(translateAmount);
		setMouseMoved(0);
		setStopAnime(false);
	}

	function handleMouseUp() {
		setIsDown(false);
	}

	function handleMouseLeave() {
		setIsDown(false);
	}

	function handleMouseMove(e) {
		if (isDown === false) {
			return;
		}

		const howMuchDidTheMouseMove = e.clientX - startX;
		setMouseMoved(howMuchDidTheMouseMove);
	}

	function handleTransitionEnd() {
		//
		setStopAnime(true);
		setBtnDisable(false);

		if (count === 0) {
			setCount(5);
			return;
		}

		if (count === 6) {
			setCount(1);
			return;
		}
	}

	function handleTranstionAfterMouseMove() {
		// tests
		const movedRight = mouseMoved > 0;
		const movedLeft = mouseMoved < 0;
		const movedRightAndBiggerThanHalf = mouseMoved > singleItemWidth / 2;
		const movedLeftAndBiggerThanHalf = mouseMoved < singleItemWidth / -2;

		if (movedRight && movedRightAndBiggerThanHalf) {
			setCount(count - 1);
			return;
		}

		if (movedRight && !movedRightAndBiggerThanHalf) {
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		if (movedLeft && movedLeftAndBiggerThanHalf) {
			setCount(count + 1);
			return;
		}

		if (movedLeft && movedLeftAndBiggerThanHalf) {
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		setTranslateAmount(count * singleItemWidth);
	}

	// USE EFFECTS
	useEffect(() => {
		setTranslateAmount(currentTranslate - mouseMoved);
	}, [mouseMoved]);

	useEffect(() => {
		console.log(count);
		setTranslateAmount(count * singleItemWidth);
	}, [count]);

	useEffect(() => {
		handleTranstionAfterMouseMove();
	}, [isDown]);

	return (
		<div className="Comp1">
			<div>
				<button
					onClick={() => {
						setCount(count - 1);
						setStopAnime(false);
						setBtnDisable(true);
					}}
					disabled={btnDisable}
				>
					left
				</button>
				<button
					onClick={() => {
						setCount(count + 1);
						setStopAnime(false);
						setBtnDisable(true);
					}}
					disabled={btnDisable}
				>
					right
				</button>
				<hr />
			</div>
			<div
				className="itemsHolder"
				onMouseDown={(e) => handleMouseDown(e)}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				onMouseMove={(e) => handleMouseMove(e)}
			>
				<div
					className={classNames("itemsString", {
						"itemsHolder--isDown": isDown,
						"itemsString--NoTransition": stopAnime || isDown,
					})}
					style={{ transform: `translateX(${translateAmount * -1}px)` }}
					onTransitionEnd={handleTransitionEnd}
				>
					{sliderArr?.map((el, i) => {
						return (
							<div className="item" key={el + i}>
								0{el}
							</div>
						);
					})}
				</div>
			</div>
			{/* BUTTONS THAT SHOW ACTIVE THINGY */}
			<div>
				<button
					className={classNames({
						activeSlideButton: count === 1 || count === 6,
					})}
				>
					1
				</button>
				<button className={classNames({ activeSlideButton: count === 2 })}>
					2
				</button>
				<button className={classNames({ activeSlideButton: count === 3 })}>
					3
				</button>
				<button className={classNames({ activeSlideButton: count === 4 })}>
					4
				</button>
				<button
					className={classNames({
						activeSlideButton: count === 5 || count === 0,
					})}
				>
					5
				</button>
			</div>
		</div>
	);
};

export default Comp1;

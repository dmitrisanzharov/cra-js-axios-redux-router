import React, { useEffect, useState } from "react";
import "./Comp1.css";
import data from "./data";
import classNames from "classnames";

const Comp1 = () => {
	const [idxOfVisible, setIdxOfVisible] = useState(0);
	const [direction, setDirection] = useState("");
	const [disableBtn, setDisableBtn] = useState(false);

	useEffect(() => {
		console.log("idxOfVisible", idxOfVisible);

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

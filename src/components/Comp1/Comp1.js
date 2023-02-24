import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";

const Comp1 = () => {
	useEffect(() => {
		const draggables = document.querySelectorAll(".draggable");
		const containers = document.querySelectorAll(".container");

		draggables.forEach((el) => {
			el.addEventListener(
				"dragstart",
				() => {
					el.classList.add("dragging");
				},
				{ once: true }
			);

			el.addEventListener(
				"dragend",
				() => {
					el.classList.remove("dragging");
				},
				{ once: true }
			);
		});
	}, []);

	return (
		<div className="Comp1">
			<div className="container">
				<p className="draggable" draggable="true">
					1
				</p>
				<p className="draggable" draggable="true">
					2
				</p>
			</div>
			<div className="container">
				<p className="draggable" draggable="true">
					3
				</p>
				<p className="draggable" draggable="true">
					4
				</p>
			</div>
		</div>
	);
};

export default Comp1;

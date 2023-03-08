import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";

const Comp1 = () => {
	// functions

	// useEffects

	useEffect(() => {
		const allContainers = document.querySelectorAll(".container");
		const allDragableElements = document.querySelectorAll(".draggable");

		// draggable elements work
		allDragableElements.forEach((el) => {
			el.addEventListener("dragstart", () => {
				el.classList.add("draggable--dragged");
			});

			el.addEventListener("dragend", () => {
				el.classList.remove("draggable--dragged");
			});
		});

		// containers work
		allContainers.forEach((el) => {
			el.addEventListener("dragover", (e) => {
				e.preventDefault();
				const elementBeingDragged = document.querySelector(
					".draggable--dragged"
				);

				const elementIAmHoveringOver = whatElementAmIHoveringOver(
					el,
					e.clientY
				);

				// console.log("elementIAmHoveringOver: ", elementIAmHoveringOver);

				if (elementIAmHoveringOver === null) {
					el.appendChild(elementBeingDragged);
				} else {
					el.insertBefore(elementBeingDragged, elementIAmHoveringOver);
				}
			});
		});

		// function work

		function whatElementAmIHoveringOver(containerHoveredOver, mousePosition) {
			const elementsThatAreInsideContainerThatAreNotDragged = [
				...containerHoveredOver.querySelectorAll(
					".draggable:not(.draggable--dragged)"
				),
			];

			return elementsThatAreInsideContainerThatAreNotDragged.reduce(
				(finalObj, element) => {
					const positionOfElementInTheDom = element.getBoundingClientRect();

					const centerOfElementInTheDom =
						positionOfElementInTheDom.top +
						positionOfElementInTheDom.height / 2;

					const amIAboveOrBelowTheElement =
						mousePosition - centerOfElementInTheDom;

					if (
						amIAboveOrBelowTheElement < 0 &&
						amIAboveOrBelowTheElement > finalObj.offset
					) {
						return { offset: amIAboveOrBelowTheElement, element: element };
					} else {
						return finalObj;
					}
				},
				{ offset: Number.NEGATIVE_INFINITY }
			).element;
		}

		return () => {
			allContainers.forEach((el) => {
				el.removeEventListener("dragover", () => "");
			});
			allDragableElements.forEach((el) => {
				el.removeEventListener("dragstart", () => "");
				el.removeEventListener("dragend", () => "");
			});
		};
	}, []);

	return (
		<div className="Comp1 drr">
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

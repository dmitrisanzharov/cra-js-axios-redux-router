import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";

const Comp1 = () => {


	useEffect(() => {
		const draggables = document.querySelectorAll(".draggable");
		// console.log("draggables: ", draggables);

		const containers = document.querySelectorAll(".container");

		draggables.forEach(el => {
			el.addEventListener("dragstart", ()=> {
				// console.log('drag starts');
				el.classList.add('dragging');
			})

			el.addEventListener('dragend', ()=> {
				// console.log('drag ends')
				el.classList.remove('dragging')
			})
		})

		containers.forEach(el => {
			el.addEventListener('dragover', (e)=> {
				e.preventDefault();
				
				const whatElementAmIHoveringOver = getDragAfterElement(el, e.clientY);
				// console.log("whatElementAmIHoveringOver: ", whatElementAmIHoveringOver);

				// 
				const draggableElement = document.querySelector('.dragging');
				// console.log("draggableElement: ", draggableElement);

				if(whatElementAmIHoveringOver === null){
					el.appendChild(draggableElement);
				} else{
					el.insertBefore(draggableElement, whatElementAmIHoveringOver)
				}
			
			})
		})

		function getDragAfterElement(container, mouseYPosition){
			const elementsNotDraggedThatAreInsideTheContainer = [...container.querySelectorAll('.draggable:not(.dragging)')];
			
			
			return elementsNotDraggedThatAreInsideTheContainer.reduce((closest, child) => {
				const offSetOfElementInsideContainer = child.getBoundingClientRect();
				// console.log("offSetOfElementInsideContainer: ", offSetOfElementInsideContainer);

				const middleOfTheElementOffsetFromTop = offSetOfElementInsideContainer.top + offSetOfElementInsideContainer.height / 2;
				// console.log("middleOfTheElementOffsetFromTop: ", middleOfTheElementOffsetFromTop);

				// console.log('mouse position', mouseYPosition); // if mouse is Bigger we are below the element, if mouse is smaller we are above the

				const mouseAboveOrBelow = mouseYPosition - middleOfTheElementOffsetFromTop;
				
				if(mouseAboveOrBelow < 0 && mouseAboveOrBelow > closest.offset){
					return { offset: mouseAboveOrBelow, element: child}
				} else {
					return closest
				}
				


			}, {offset: Number.NEGATIVE_INFINITY}).element
		
		}

		return () => {
			draggables.forEach(el=> {
				el.removeEventListener('dragstart', ()=> true);
				el.removeEventListener('dragend', ()=> true)
			})
			containers.forEach(el=>{
				el.removeEventListener('dragover', ()=> true)
			})
		}

	}, []);



	return (
		<div className="Comp1 drr">
			<div className="container">
				<p className="draggable" draggable="true" id='1'>
					1
				</p>
				<p className="draggable" draggable="true" id='2'>
					2
				</p>
			</div>
			<div className="container">
				<p className="draggable" draggable="true" id='3'>
					3
				</p>
				<p className="draggable" draggable="true" id='4'>
					4
				</p>
			</div>
		</div>
	);
};

export default Comp1;

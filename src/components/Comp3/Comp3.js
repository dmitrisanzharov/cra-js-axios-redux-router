import React, { useState, useEffect, useRef } from "react";
import "./Comp3.css";

const Comp3 = () => {
	const container3 = useRef();

	const [scrollRight, setScrollRight] = useState(0);
	const [scrollBottom, setScrollBottom] = useState(0);

	useEffect(() => {
		container3.current.scrollLeft = scrollRight;
	}, [scrollBottom, scrollRight]);

	return (
		<div>
			<button onClick={() => setScrollBottom(scrollBottom + 20)}>
				scroll bottom
			</button>
			<button onClick={() => setScrollRight(scrollRight + 20)}>
				scroll right
			</button>
			<div className="container3 drr" ref={container3}>
				<div className="item3"></div>
				<div className="item3"></div>
				<div className="item3"></div>
				<div className="item3"></div>
				<div className="item3"></div>
			</div>
		</div>
	);
};

export default Comp3;

import React, { useRef, useEffect } from "react";

const UseRef = () => {
	const h1Tag = useRef(null);

	// ! NOTE useRef does NOT work with useMemo, because useMemo fires BEFORE HTML template loads, and as a result, it can NOT bind itself to anything yet

	useEffect(() => {
		console.log(h1Tag.current);
		h1Tag.current.innerHTML = "changed from useRef";
	}, []);

	return (
		<div>
			<h1 ref={h1Tag}>UseRef</h1>
		</div>
	);
};

export default UseRef;

import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import { useForm } from "react-hook-form";
import { styled, alpha } from "@mui/material";

const Comp1 = () => {
	const MyTest = styled("h1")(({ theme }) => ({
		backgroundColor: alpha("#FFA07A", 0.15),
		"&:hover": {
			backgroundColor: "yellow",
			cursor: "pointer",
		},
	}));
	return (
		<div className="Comp1">
			<hr />
			<MyTest>Omg</MyTest>
		</div>
	);
};

export default Comp1;

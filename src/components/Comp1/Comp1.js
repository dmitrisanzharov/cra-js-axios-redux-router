import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import { styled, alpha, Box } from "@mui/material";

const Comp1 = () => {

const style1 ={
	'.omg1 &':{
		color: 'red'
	}
}


	return (
		<div className="Comp1">
			<div className="omg1 omg2">
				Hello World
				<Box sx={style1}>
					Mah Man
				</Box>
			</div>
		</div>
	);
};

export default Comp1;

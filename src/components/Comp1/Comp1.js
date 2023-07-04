import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import { useForm } from "react-hook-form";

const Comp1 = () => {
	return <div className="Comp1">
		<h1>Rentalmatics Table</h1>
		<table>
			<tr>
				<th>Car</th>
				<th id='vid'>Registration, zI: 2</th>
				<th>Milage</th>
			</tr>
			<tr>
				<td>BMW</td>
				<td id='vid-td'>21-D-9087, zI: 1</td>
				<td>100,000</td>
			</tr>
			<tr>
				<td>Audi</td>
				<td>19-D-2345</td>
				<td>90,000</td>
			</tr>
		</table>
	</div>;
};

export default Comp1;

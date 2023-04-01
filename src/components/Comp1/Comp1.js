import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Comp1.css";
import { useForm } from "react-hook-form";

const Comp1 = () => {
	const data1 = [
		{ name: "Dmitri", pass: "abc", arr: ["a", "b"] },
		{ name: "Blah", pass: "blah", arr: ["c", "d"] },
	];

	function fullCycle() {
		const headers = Object.keys(data1[0]).toString();
		console.log("headers: ", headers);

		let main = data1.map((el) => {
			return Object.values(el).toString();
		});
		console.log(main);

		const csvFormat = [headers, ...main].join("\n");
		console.log("csvFormat: ", csvFormat);

		startCSVDownload(csvFormat);
	}

	function startCSVDownload(input) {
		const blob = new Blob([input], { type: "application/csv" });

		const url = URL.createObjectURL(blob);
		console.log("url: ", url);

		const a = document.createElement("a");
		a.download = "nameOfMyFile.csv";
		a.href = url;
		a.style.display = "none";

		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	}

	return (
		<div className="Comp1">
			<h1>all data</h1>
			<button onClick={fullCycle}>download csv</button>
			{data1.map((el) => {
				const { name, pass, arr } = el;
				return (
					<div key={name}>
						<hr />
						<ul>
							<li>
								<b>Name: {name}</b>
							</li>
							<li>
								<b>Pass: </b>
								{pass}
							</li>
							<li>
								<b>Array</b>
								<ul>
									{arr.map((el2) => (
										<li key={el2}>{el2}</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Comp1;

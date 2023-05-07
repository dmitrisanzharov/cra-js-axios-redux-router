import React from "react";
import { Link } from "react-router-dom";

// view
import pagesView from "../view/pagesView";

const NavBar = () => {
	return (
		<div>
			<h1>NavBar</h1>
			<ul>
				{pagesView?.map((el) => {
					const { id, url, text } = el;
					return (
						<li key={id}>
							<Link to={url}>{text}</Link>
						</li>
					);
				})}
			</ul>
			<hr />
		</div>
	);
};

export default NavBar;

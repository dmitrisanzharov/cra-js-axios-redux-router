import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../App.css";

const TourCard = () => {
	return (
		<Grid item xs={3}>
			<Paper elevation={3}>
				<img
					src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
					alt="blah1"
					className="myImg"
				/>
				<Typography variant="subtitle1" component="h2">
					Immerse into the Falls
				</Typography>
			</Paper>
		</Grid>
	);
};

export default TourCard;

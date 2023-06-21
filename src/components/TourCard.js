import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
	Typography,
	Box,
	Rating,
	createTheme,
	ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

import "../App.css";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

const TourCard = ({ tour }) => {
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper elevation={3}>
					<img
						src={
							tour.image
								? tour.image
								: "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
						}
						alt="blah1"
						className="myImg"
					/>
					<Box px={1}>
						<Typography variant="subtitle1" component="h2">
							{tour.name}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography variant="body2" component="p" ml={0.5}>
								{tour.duration} hours
							</Typography>
						</Box>
						{/* RATINGS */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
							mt={3}
						>
							<Rating
								name="read-only"
								value={tour.rating}
								readOnly
								precision={0.5}
								size={"small"}
							/>
							<Typography variant="body2" component="p" ml={0.5}>
								{tour.rating}
							</Typography>
							<Typography variant="body3" component="p" ml={1.5}>
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>

						{/* PRICE */}
						<Box>
							<Typography variant="h6" component="h3" ml={1.5}>
								From ${tour.price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;

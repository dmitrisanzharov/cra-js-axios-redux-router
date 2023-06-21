import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./App.css";
import cities from "./data.json";

// components
import Comp1 from "./components/Comp1/Comp1";
import TourCard from "./components/TourCard";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./components/Tour";

function App() {
	console.log(cities);

	return (
		<>
			<SearchAppBar />
			<Container sx={{ my: 3 }} sx={{ display: "none" }}>
				{cities.map((city) => {
					return (
						<React.Fragment key={city.name}>
							<Typography variant="h4" component="h2" marginTop={5}>
								Top {city.name} Tours
							</Typography>
							<Grid container spacing={5} my={1}>
								{city.tours.map((tour) => {
									return <TourCard tour={tour} key={tour.name + tour.id} />;
								})}
							</Grid>
						</React.Fragment>
					);
				})}
			</Container>
			{/* <Comp1 /> */}
			<hr />
			<Tour />
		</>
	);
}

export default App;

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import TourCard from "./components/TourCard";

function App() {
	return (
		<>
			<Container maxWidth="xl">
				<Grid container spacing={5}>
					<TourCard />
					<TourCard />
					<TourCard />
					<TourCard />
				</Grid>
			</Container>
		</>
	);
}

export default App;

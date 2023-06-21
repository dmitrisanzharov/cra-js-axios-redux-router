import React from "react";
import tourAll from "../data.json";
import {
	Box,
	Container,
	Typography,
	Paper,
	BottomNavigation,
	BottomNavigationAction,
} from "@mui/material";
import ImageCollage from "./ImageCollage";
import CustomizedAccordions from "./CustomizedAccordions";

// Icons
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import BasicModal from "./BasicModal";

const Tour = () => {
	let tour = tourAll[0].tours[0];
	console.log("tour: ", tour);

	return (
		<div>
			<Container sx={{ width: 900 }}>
				<Typography variant="h3" component="h1" mt={3}>
					Explore the world and Vegas
				</Typography>
				{/* IMAGES */}
				<Box mt={3} sx={{ display: "flex" }}>
					<img
						src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?cs=srgb&dl=pexels-pixabay-415999.jpg&fm=jpg"
						alt=""
						height={325}
					/>
					<ImageCollage />
				</Box>
				{/* Title */}
				<Box>
					<Typography variant="h6" component="h4" mt={3}>
						About this ticket
					</Typography>
					<Typography variant="paragraph" component="p" mt={3}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ea
						aspernatur porro nostrum corrupti accusantium error suscipit eum et,
						animi consectetur autem quae dolorum eos. Ea quaerat quo provident,
						natus dicta aspernatur perferendis officia eligendi, modi vitae
						mollitia molestias aliquid.
					</Typography>
				</Box>
				{/* FAQ */}
				<Box>
					<Typography variant="h6" component="h4" my={3}>
						FAQ
					</Typography>
					<CustomizedAccordions />
				</Box>
				{/* BOTTOM NAVIGATION */}
				<Box>
					<Paper
						sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
						elevation={3}
					>
						<BottomNavigation>
							<BasicModal />
						</BottomNavigation>
					</Paper>
				</Box>
			</Container>
		</div>
	);
};

export default Tour;

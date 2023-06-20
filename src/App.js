import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import TeamList from "./components/TeamList";

function App() {
	return (
		<div className="addPaddingSmall">
			{/* <Comp1 amount={4} /> */}
			{/* <Comp2 /> */}
			<TeamList />
		</div>
	);
}

export default App;

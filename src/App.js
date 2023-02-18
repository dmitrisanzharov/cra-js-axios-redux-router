import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";

function App() {
	return (
		<div className="addPadding">
			<Comp1 />
			<hr />
			<Comp2 />
		</div>
	);
}

export default App;

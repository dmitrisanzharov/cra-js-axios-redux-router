import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import UserContext from './components/UserContext';

function App() {
	return (
		<div className="addPadding">
			{/* <Comp1 /> */}
			{/* <Comp2 /> */}
			<UserContext />
		</div>
	);
}

export default App;

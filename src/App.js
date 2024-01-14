import "./App.css";

// components
import DummyComp from "./components/DummyComp";

// context
import ContextAsABlockWrapper from './ContextAsABlock/ContextAsABlockWrapper'

function App() {
	return (
		<div>
			<DummyComp />
			<hr />
			<ContextAsABlockWrapper />
		</div>
	);
}

export default App;

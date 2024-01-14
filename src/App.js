import "./App.css";

// components
import DummyComp from "./components/DummyComp";
import BlockAIndex from './components/blockA/BlockAIndex'
import BlockBIndex from './components/blockB/BlockBIndex'

function App() {
	return (
		<div>
			<DummyComp />
			<hr />
			<BlockAIndex />
			<hr />
			<BlockBIndex />
		</div>
	);
}

export default App;

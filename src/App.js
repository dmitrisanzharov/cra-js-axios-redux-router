import "./App.css";

// components
import DummyComp from "./components/DummyComp";
import AppProvider from './context/context'

function App() {
	return (
		<AppProvider>
			<DummyComp />
		</AppProvider>
	);
}

export default App;

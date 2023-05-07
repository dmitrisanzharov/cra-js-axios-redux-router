import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import pagesView from "./view/pagesView";

// components
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="addPadding">
			<BrowserRouter>
				<NavBar />

				<Routes>
					{pagesView?.map((el) => {
						const { url, component, id } = el;

						return <Route exact path={url} element={component} key={id} />;
					})}
					{/* <Route
						exact
						path="/usestate-and-useeffect"
						element={<UseStateAndUseEffect />}
					/> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

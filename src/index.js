import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./globalStyles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// redux imports
import { Provider } from "react-redux";
import storeConfig from "./redux/storeConfiguration";

// redux API, React query
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={storeConfig}>
		<ApiProvider api={apiSlice}>
			<App />
		</ApiProvider>
	
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { configureStore } from "@reduxjs/toolkit";
import mainStoreReducer from "./mainStore";

const storeConfig = configureStore({
	reducer: {
		mainStore: mainStoreReducer,
	},
});

export default storeConfig;

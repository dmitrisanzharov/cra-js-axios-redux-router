import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const mainStore = createSlice({
	name: "mainStore",
	initialState,
	reducers: {
		inc: (state) => {
			state.count = state.count + 1;
		},
		dec: (state) => {
			state.count = state.count - 1;
		},
		randomFun: (state, action) => {
			console.log("this is action", action.payload);
			console.log("this is state", state.count);
		},
	},
});

export const { inc, dec, randomFun } = mainStore.actions;

export default mainStore.reducer;

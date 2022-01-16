import { createSlice } from "@reduxjs/toolkit";

const customGenderSlice = createSlice({
	name: "customGender",
	initialState: { customGenderIsVisible: false },
	reducers: {
		open(state) {
			state.customGenderIsVisible = true;
		},
		close(state) {
			state.customGenderIsVisible = false;
		},
	},
});

export const customGenderActions = customGenderSlice.actions;

export default customGenderSlice;

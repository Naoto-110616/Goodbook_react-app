import { createSlice } from "@reduxjs/toolkit";

const navListSlice = createSlice({
	name: "navList",
	initialState: { navListIsVisible: false },
	reducers: {
		toggle(state) {
			state.navListIsVisible = !state.navListIsVisible;
		},
	},
});

export const navListActions = navListSlice.actions;

export default navListSlice;

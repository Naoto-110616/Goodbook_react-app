import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: "",
		isLoggedIn: false,
	},
	reducers: {
		login(state, action) {
			state.token = action.payload.token;
			state.isLoggedIn = !!state.token;
		},
		logout(state, action) {
			state.token = null;
			state.isLoggedIn = !!state.token;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;

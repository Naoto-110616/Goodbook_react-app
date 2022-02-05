import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: localStorage.getItem("token"),
		isLoggedIn: false,
	},
	reducers: {
		login(state, action) {
			state.token = action.payload.token;
			state.isLoggedIn = !!state.token;
			localStorage.setItem("token", state.token);
		},
		logout(state) {
			state.token = null;
			state.isLoggedIn = !!state.token;
			localStorage.removeItem("token");
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;

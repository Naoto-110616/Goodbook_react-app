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
		},
		logout(state, action) {
			state.token = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;

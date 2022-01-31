import { createSlice } from "@reduxjs/toolkit";
import submitSlice from "./submit-slice";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: "",
		isLoggedIn: false,
	},
	reducers: {
		loginHandler(state, action) {
			state.token = action.payload.token;
		},
		logoutHandler(state, action) {
			state.token = null;
		},
	},
});

export const authActions = authSlice.actions;

export default submitSlice;

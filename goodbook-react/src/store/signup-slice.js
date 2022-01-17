import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
	name: "signup",
	initialState: { signupIsVisible: false },
	reducers: {
		toggle(state) {
			state.signupIsVisible = !state.signupIsVisible;
		},
		signup(state) {},
	},
});

export const signupActions = signupSlice.actions;

export default signupSlice;

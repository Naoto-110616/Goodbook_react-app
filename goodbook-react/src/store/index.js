import { configureStore } from "@reduxjs/toolkit";

import navListSlice from "./navList-slice";
import customGenderSlice from "./customGender-slice";
import signupSlice from "./signup-slice";
import submitSlice from "./submit-slice";

const store = configureStore({
	reducer: {
		navList: navListSlice.reducer,
		customGender: customGenderSlice.reducer,
		signup: signupSlice.reducer,
		submit: submitSlice.reducer,
	},
});

export default store;

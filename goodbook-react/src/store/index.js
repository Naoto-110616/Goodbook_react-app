import { configureStore } from "@reduxjs/toolkit";

import navListSlice from "./navList-slice";
import customGenderSlice from "./customGender-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
	reducer: {
		navList: navListSlice.reducer,
		customGender: customGenderSlice.reducer,
		signup: signupSlice.reducer,
	},
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import navListSlice from "./navList-slice";
import customGenderSlice from "./customGender-slice";

const store = configureStore({
	reducer: {
		navList: navListSlice.reducer,
		customGender: customGenderSlice.reducer,
	},
});

export default store;

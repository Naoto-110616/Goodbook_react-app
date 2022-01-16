import { configureStore } from "@reduxjs/toolkit";

import navListSlice from "./navList-slice";

const store = configureStore({
	reducer: { navList: navListSlice.reducer },
});
export default store;

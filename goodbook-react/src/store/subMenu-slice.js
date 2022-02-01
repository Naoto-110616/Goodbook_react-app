import { createSlice } from "@reduxjs/toolkit";

const subMenuSlice = createSlice({
	name: "subMenu",
	initialState: { subMenuVisible: false },
	reducers: {
		toggle(state) {
			state.subMenuVisible = !state.subMenuVisible;
        },
        close(state) {
            state.subMenuVisible = false;
        }
	},
});

export const subMenuActions = subMenuSlice.actions;

export default subMenuSlice;

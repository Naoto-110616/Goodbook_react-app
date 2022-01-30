import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
	name: "submit",
	initialState: {},
	reducers: {
		submit(state, action) {
			const enteredEmail = action.payload.enteredEmail;
			const enteredPassword = action.payload.enteredPassword;
			fetch(action.payload.destination, {
				method: "POST",
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}).then((res) => {
				if (res.ok) {
					// history.push("/home");
				} else {
					return res.json().then((data) => {
						let errorMessage = "Authentication failed!";
						if (data && data.error && data.error.message) {
							errorMessage = data.error.message;
						}
						alert(errorMessage);
					});
				}
			});
		},
	},
});

export const submitActions = submitSlice.actions;

export default submitSlice;

import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
	name: "signup",
	initialState: { signupIsVisible: false },
	reducers: {
		toggle(state) {
			state.signupIsVisible = !state.signupIsVisible;
		},
		signup(state, action) {
			const enteredEmail = action.payload.enteredEmail;
			const enteredPassword = action.payload.enteredPassword;
			console.log(enteredEmail, enteredPassword);

			fetch(
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBV_HDSl0eps1HRi2_oXPPseJrYlUvBzys",
				{
					method: "POST",
					body: JSON.stringify({
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((res) => {
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

export const signupActions = signupSlice.actions;

export default signupSlice;

import Layouts from "../components/Layout/Layouts";

import classes from "./ChangePassword.module.css";

import Input from "../components/UI/Input/Input";
import Form from "../components/UI/Form/Form";
import Button from "../components/UI/Button/Button";

import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ChangePassword = () => {
	const history = useHistory();
	const newPasswordInputRef = useRef();
	const token = useSelector((state) => state.auth.token);

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredNewPassword = newPasswordInputRef.current.value;
		if (enteredNewPassword) {
			fetch(
				"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBV_HDSl0eps1HRi2_oXPPseJrYlUvBzys",
				{
					method: "POST",
					body: JSON.stringify({
						idToken: token,
						password: enteredNewPassword,
						returnSecureToken: false,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((res) => {
				// assumption: Always succeeds!
				history.replace("/home");
			});
		}
	};

	return (
		<Layouts>
			<Form onSubmit={submitHandler}>
				<div className={classes.changePassword}>
					<label htmlFor="new-password">New Password</label>
					<Input
						input={{
							ref: newPasswordInputRef,
							id: "new-password",
							minLength: "7",
						}}
					/>
					<Button>submit</Button>
				</div>
			</Form>
		</Layouts>
	);
};

export default ChangePassword;

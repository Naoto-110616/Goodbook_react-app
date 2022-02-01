import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Signup.module.css";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import CustomGender from "./CustomGender/CustomGender";
import Form from "../UI/Form/Form";
import { customGenderActions } from "../../store/customGender-slice";
import { authActions } from "../../store/auth-slice";
import {
	today,
	birthYear,
	birthMonth,
	setYear,
	setMonth,
	setDay,
} from "../../util/Consts";

const Signup = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const toggleCustomGender = useSelector(
		(state) => state.customGender.customGenderIsVisible
	);
	const customGenderOpenHandler = () => {
		dispatch(customGenderActions.open());
	};
	const customGenderCloseHandler = () => {
		dispatch(customGenderActions.close());
	};

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const submitSignupHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
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
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = "Authentication failed!";
						if (data && data.error && data.error.message) {
							errorMessage = data.error.message;
						}
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				dispatch(authActions.login({ token: data.idToken }));
				history.push("/home");
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<Modal onClose={props.onClose}>
			<Form className={classes.signup} onSubmit={submitSignupHandler}>
				<div>
					<div className={classes["signup-text"]}>
						<div>
							<h2>Sing Up</h2>
							<p>It's quick and easy.</p>
						</div>
						<div className={classes["signup-x"]}>
							<i onClick={props.onClose} className="far fa-times-circle"></i>
						</div>
					</div>
					<Input signup={true} input={{ placeholder: "First name" }} />
					<Input signup={true} input={{ placeholder: "Last name" }} />
					<Input
						signup={true}
						input={{
							placeholder: "Email",
							ref: emailInputRef,
						}}
					/>
					<Input
						signup={true}
						input={{ placeholder: "New password", ref: passwordInputRef }}
					/>
					<p className={classes["category-name"]}>Birthday</p>
					<div className={classes.birthday}>
						<Select
							signup={true}
							select={{
								name: "month",
								title: "month",
								defaultValue: birthMonth,
							}}
						>
							{setMonth()}
						</Select>
						<Select
							signup={true}
							select={{ name: "day", title: "day", defaultValue: today }}
						>
							{setDay()}
						</Select>
						<Select
							signup={true}
							select={{ name: "year", title: "year", defaultValue: birthYear }}
						>
							{setYear()}
						</Select>
					</div>
					<p className={classes["category-name"]}>Gender</p>
					<div className={classes.gender}>
						<Input
							onClick={customGenderCloseHandler}
							label="Female"
							radio={true}
							input={{
								id: "radio1",
								type: "radio",
								name: "gender",
								value: "Female",
							}}
						/>
						<Input
							onClick={customGenderCloseHandler}
							label="Male"
							radio={true}
							input={{
								id: "radio2",
								type: "radio",
								name: "gender",
								value: "Male",
							}}
						/>
						<Input
							onClick={customGenderOpenHandler}
							label="Custom"
							radio={true}
							input={{
								id: "radio3",
								type: "radio",
								name: "gender",
								value: "Custom",
							}}
						/>
					</div>
					{toggleCustomGender && <CustomGender />}
					<div className={classes["btn-wrap"]}>
						<Button signup={true}>Sing Up</Button>
					</div>
				</div>
			</Form>
		</Modal>
	);
};
export default Signup;

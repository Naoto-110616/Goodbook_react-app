import { useRef } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import useInput from "../../hooks/use-input";

import MediaQuery from "react-responsive";

const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length >= 6;

const Login = (props) => {
	const history = useHistory();

	const autoLoginHandler = () => {
		history.push("/home");
	};

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(isEmail);

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPassword,
	} = useInput(isPassword);

	let formIsValid = false;
	if (emailIsValid && passwordIsValid) {
		formIsValid = true;
	}
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const submitLoginHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBV_HDSl0eps1HRi2_oXPPseJrYlUvBzys",
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
				resetEmail();
				resetPassword();
				history.push("/home");
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
	};

	const emailClasses = emailHasError ? "login-input invalid" : "login-input";
	const passwordClasses = passwordHasError
		? "login-input invalid"
		: "login-input";

	return (
		<>
			<section className={classes.login}>
				<div className={classes["login-wrap"]}>
					<MediaQuery query="(min-width: 768px)">
						<div className={classes["login-left"]}>
							<h1>goodbook</h1>
							<p>Connect with friends and the world around you on GoodBook.</p>
						</div>
					</MediaQuery>
					<MediaQuery query="(max-width:767px)">
						<div className={classes["login-sp-title"]}>goodbook</div>
					</MediaQuery>
					<div className={classes["login-right"]}>
						<Form onSubmit={submitLoginHandler}>
							<Input
								login={true}
								className={emailClasses}
								value={emailValue}
								onChange={emailChangeHandler}
								onBlur={emailBlurHandler}
								input={{
									id: "email",
									type: "text",
									placeholder: "Email or Phone Number",
									ref: emailInputRef,
								}}
							/>
							{emailHasError && (
								<p className={classes["error-text"]}>
									Please enter a valid email address.
								</p>
							)}
							<Input
								login={true}
								className={passwordClasses}
								value={passwordValue}
								onChange={passwordChangeHandler}
								onBlur={passwordBlurHandler}
								input={{
									id: "pass",
									type: "password",
									placeholder: "Password",
									ref: passwordInputRef,
								}}
							/>
							{passwordHasError && (
								<p className={classes["error-text"]}>
									Please enter at least 6 characters.
								</p>
							)}
							<Button disabled={!formIsValid}>Log In</Button>
						</Form>
						<div className={classes.remember}>
							<a href="/">Forgot Password?</a>
						</div>
						<Button signup={true} onClick={props.onShowSignup}>
							Create New Account
						</Button>
						<Button onClick={autoLoginHandler}>Auto Login</Button>
					</div>
				</div>
			</section>
		</>
	);
};
export default Login;

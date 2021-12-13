import classes from "./Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form"
import useInput from "../../hooks/use-input";

const isEmail = value => value.includes("@");
const isPassword = value => value.length >= 6;

const Login = (props) => {
	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail
	} = useInput(isEmail)

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPassword
	} = useInput(isPassword)

	let formIsValid = false;
	if (emailIsValid && passwordIsValid) {
		formIsValid = true
	}
	const submitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		console.log(emailValue, passwordValue)
		resetEmail();
		resetPassword();
	}

	const emailClasses = emailHasError ? "login-input invalid" : "login-input"
	const passwordClasses = passwordHasError ? "login-input invalid" : "login-input"

	return (
		<>
			<section className={classes.login}>
				<div className={classes["login-wrap"]}>
					<div className={classes["login-left"]}>
						<h1>goodbook</h1>
						<p>Connect with friends and the world around you on GoodBook.</p>
					</div>
					<div className={classes["login-right"]}>
						<Form onSubmit={submitHandler}>
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
								}}
							/>
							{emailHasError && <p className={classes["error-text"]}>Please enter a valid email address.</p>}
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
								}}
							/>
							{passwordHasError && <p className={classes["error-text"]}>Please enter at least 6 characters.</p>}
							<Button disabled={!formIsValid}>Log In</Button>
						</Form>
						<div className={classes.remember}>
							<a href="/">Forgot Password?</a>
						</div>
						<Button signup={true} onClick={props.onShowSignup}>
							Create New Account
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};
export default Login;

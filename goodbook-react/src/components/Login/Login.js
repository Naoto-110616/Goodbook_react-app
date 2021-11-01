import classes from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = () => {
	return (
		<>
			<section className={classes.login}>
				<div className={classes["login-wrap"]}>
					<div className={classes["login-left"]}>
						<h1>goodbook</h1>
						<p>Connect with friends and the world around you on GoodBook.</p>
					</div>
					<div className={classes["login-right"]}>
						<Input
							className={"login-input"}
							input={{
								id: "email",
								type: "text",
								autofocus: "1",
								placeholder: "Email or Phone Number",
							}}
						/>
						<Input
							className={"login-input"}
							input={{
								id: "pass",
								type: "password",
								placeholder: "Password",
							}}
						/>
						<Button className={"login-button"}>Login</Button>
						<a>Forgot Password?</a>
						<Button className={"singup-button"}>Create New Account</Button>
					</div>
				</div>
			</section>
		</>
	);
};
export default Login;

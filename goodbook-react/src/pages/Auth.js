import { useState } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const Auth = () => {
	const [signupIsShown, setSignupIsShown] = useState(false);

	const showSignupHandler = () => {
		setSignupIsShown(true);
	};
	const hideSignupHandler = () => {
		setSignupIsShown(false);
	};

	return (
		<>
			{signupIsShown && <Signup onClose={hideSignupHandler} />}
			<Login onShowSignup={showSignupHandler} />
		</>
	);
};
export default Auth;

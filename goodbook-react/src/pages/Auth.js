import { useDispatch, useSelector } from "react-redux";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { signupActions } from "../store/signup-slice";

const Auth = () => {
	const dispatch = useDispatch();
	const toggleSignup = useSelector((state) => state.signup.signupIsVisible);
	const signupToggleHandler = () => {
		dispatch(signupActions.toggle());
	};

	return (
		<>
			{toggleSignup && <Signup onClose={signupToggleHandler} />}
			<Login onShowSignup={signupToggleHandler} />
		</>
	);
};
export default Auth;

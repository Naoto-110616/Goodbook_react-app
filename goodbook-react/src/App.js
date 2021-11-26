import { useState } from "react";
import Login from "./components/Login/Login";
import "./App.css";
import Signup from "./components/Signup/Signup";

function App() {
	const [signupIsShown, setSignupIsShown] = useState(false);

	const showSignupHandler = () => {
		setSignupIsShown(true);
	};
	const hideSignupHandler = () => {
		setSignupIsShown(false);
	};

	return (
		<div className="App">
			{signupIsShown && <Signup onClose={hideSignupHandler} />}
			<Login onShowSignup={showSignupHandler} />
		</div>
	);
}

export default App;

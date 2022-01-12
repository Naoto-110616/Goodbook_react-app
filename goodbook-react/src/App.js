import "./App.css";
import { Route, Redirect } from "react-router-dom";

import Auth from "./pages/Auth";

function App() {
	return (
		<div className="App">
			<Route path="/auth">
				<Auth />
			</Route>
			<Route path="*">
				<Redirect to="/auth" />
			</Route>
		</div>
	);
}

export default App;

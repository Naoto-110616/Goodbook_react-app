import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ChangePassword from "./pages/ChangePassword";

function App() {
	const token = useSelector((state) => state.auth.token);

	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					{!token && <Redirect to="/auth" />}
					{token && <Redirect to="/home" />}
				</Route>
				{token && (
					<Route path="/home">
						<Home />
					</Route>
				)}
				{!token && (
					<Route path="/auth">
						<Auth />
					</Route>
				)}
				{token && (
					<Route path="/changePassword">
						<ChangePassword />
					</Route>
				)}
				<Route path="*">
					{token && <NotFound />}
					{!token && <Redirect to="/auth" />}
				</Route>
			</Switch>
		</div>
	);
}

export default App;

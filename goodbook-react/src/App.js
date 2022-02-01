import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	const token = useSelector((state) => state.auth.token);

	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Redirect to="/auth" />
				</Route>
				<Route path="/auth">
					<Auth />
				</Route>
				{token && (
					<Route path="/home">
						<Home />
					</Route>
				)}
				<Route path="*">
					{!token && <Redirect to="/auth" />}
					{token && <NotFound />}
				</Route>
			</Switch>
		</div>
	);
}

export default App;

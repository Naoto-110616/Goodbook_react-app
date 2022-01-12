import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Redirect to="/auth" />
				</Route>
				<Route path="/auth">
					<Auth />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

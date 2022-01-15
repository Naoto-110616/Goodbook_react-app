import Layouts from "../components/Layout/Layouts";
import classes from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { GiBreakingChain } from "react-icons/gi";

const NotFound = () => {
	return (
		<Layouts>
			<div className={classes.notFound}>
				<GiBreakingChain />
				<p className={classes.title}>This Page Isn't Available</p>
				<p className={classes.description}>
					The lin may be broken, or the page may have been removed.
					<br />
					Check to see if the link you7re trying to open is correct.
				</p>
				<div className={classes.button}>
					<Link to="/home">Go to News Feed</Link>
				</div>
				<div className={classes.link}>
					<Link to="/">Go Back</Link>
				</div>
				<div className={classes.link}>
					<Link to="/home">Visit Help Center</Link>
				</div>
			</div>
		</Layouts>
	);
};

export default NotFound;

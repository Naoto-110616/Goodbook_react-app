import classes from "./Header.module.css";

import MainNavigation from "./MainNavigation";
import SubNavigation from "./SubNavigation";

import MediaQuery from "react-responsive";

const Header = (props) => {
	return (
		<header>
			<h1 className={classes.logo}>goodbook</h1>
			<MainNavigation />
			<MediaQuery query="(min-width:768px)">
				<SubNavigation />
			</MediaQuery>
		</header>
	);
};
export default Header;

import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import SubNavigation from "./SubNavigation";

const Header = (props) => {
	return (
		<header>
			<h1 className={classes.logo}>goodbook</h1>
			<MainNavigation />
			<SubNavigation />
		</header>
	);
};
export default Header;

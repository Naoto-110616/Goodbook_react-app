import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import SubNavigation from "./SubNavigation";

const Header = (props) => {
	return (
		<header>
			<div className={classes.logo}>goodbook</div>
			<MainNavigation />
			<SubNavigation />
		</header>
	);
};
export default Header;

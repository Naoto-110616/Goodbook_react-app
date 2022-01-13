import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = (props) => {
	return (
		<header>
			<div className={classes.logo}>goodbook</div>
			<MainNavigation />
		</header>
	);
};
export default Header;

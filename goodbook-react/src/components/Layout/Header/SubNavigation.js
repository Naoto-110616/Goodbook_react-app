import classes from "./SubNavigation.module.css";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { MdNotificationsActive, MdOutlineArrowDropDown } from "react-icons/md";

const SubNavigation = () => {
	return (
		<nav className={classes.subNav}>
			<ul>
				<li className={classes.profile}>
					<CgProfile />
					<p>Name</p>
				</li>
				<li className={classes.circle}>
					<CgMenuGridO />
				</li>
				<li className={classes.circle}>
					<FaFacebookMessenger />
				</li>
				<li className={classes.circle}>
					<MdNotificationsActive />
				</li>
				<li className={classes.circle}>
					<MdOutlineArrowDropDown />
				</li>
			</ul>
		</nav>
	);
};
export default SubNavigation;

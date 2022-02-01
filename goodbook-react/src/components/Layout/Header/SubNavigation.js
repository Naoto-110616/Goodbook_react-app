import classes from "./SubNavigation.module.css";

import { FaFacebookMessenger } from "react-icons/fa";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { MdNotificationsActive, MdOutlineArrowDropDown } from "react-icons/md";

import SubMenu from "./SubMenu/SubMenu";

import { useSelector, useDispatch } from "react-redux";
import { subMenuActions } from "../../../store/subMenu-slice";

const SubNavigation = () => {
	const toggleSubMenu = useSelector((state) => state.subMenu.subMenuVisible);
	const dispatch = useDispatch();
	const subMenuToggleHandler = () => {
		dispatch(subMenuActions.toggle());
	};

	return (
		<>
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
					<li className={classes.circle} onClick={subMenuToggleHandler}>
						<MdOutlineArrowDropDown />
					</li>
				</ul>
			</nav>
			{toggleSubMenu && <SubMenu />}
		</>
	);
};
export default SubNavigation;

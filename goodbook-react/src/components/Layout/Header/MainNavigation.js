import { NavLink } from "react-router-dom";

import MediaQuery from "react-responsive";

import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePeople } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import classes from "./MainNavigation.module.css";

import { subMenuActions } from "../../../store/subMenu-slice";
import { useDispatch } from "react-redux";

const MainNavigation = () => {
	const dispatch = useDispatch();
	const subMenuCloseHandler = () => {
		dispatch(subMenuActions.close());
	};
	return (
		<>
			<nav className={classes.mainNav}>
				<ul>
					<li onClick={subMenuCloseHandler}>
						<NavLink to="/home" activeClassName={classes.active}>
							<AiOutlineHome />
						</NavLink>
					</li>
					<li onClick={subMenuCloseHandler}>
						<NavLink to="/friends" activeClassName={classes.active}>
							<BsPeople />
						</NavLink>
					</li>
					<li onClick={subMenuCloseHandler}>
						<NavLink to="/watch" activeClassName={classes.active}>
							<FiMonitor />
						</NavLink>
					</li>
					<li onClick={subMenuCloseHandler}>
						<NavLink to="/notifications" activeClassName={classes.active}>
							<MdOutlinePeople />
						</NavLink>
					</li>
					<MediaQuery query="(min-width:768px)">
						<li onClick={subMenuCloseHandler}>
							<NavLink to="/gaming" activeClassName={classes.active}>
								<SiFacebookgaming />
							</NavLink>
						</li>
					</MediaQuery>
					<MediaQuery query="(max-width:767px)">
						<li>
							<NavLink to="/burger" activeClassName={classes.active}>
								<GiHamburgerMenu />
							</NavLink>
						</li>
					</MediaQuery>
				</ul>
			</nav>
		</>
	);
};

export default MainNavigation;

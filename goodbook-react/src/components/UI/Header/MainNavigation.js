import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePeople } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to="/home" activeClassName={classes.active}>
							<AiOutlineHome />
						</NavLink>
					</li>
					<li>
						<NavLink to="/test" activeClassName={classes.active}>
							<BsPeople />
						</NavLink>
					</li>
					<li>
						<NavLink to="/aaa" activeClassName={classes.active}>
							<FiMonitor />
						</NavLink>
					</li>
					<li>
						<NavLink to="/ccc" activeClassName={classes.active}>
							<MdOutlinePeople />
						</NavLink>
					</li>
					<li>
						<NavLink to="/ttt" activeClassName={classes.active}>
							<SiFacebookgaming />
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>test</div>
		</>
	);
};
export default MainNavigation;

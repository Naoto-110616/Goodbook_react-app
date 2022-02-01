import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { navListActions } from "../../store/navList-slice";
import classes from "./NavList.module.css";

import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { navList, seeMoreNavList } from "../../util/Consts";

const NavList = () => {
	const dispatch = useDispatch();
	const toggleNavList = useSelector((state) => state.navList.navListIsVisible);
	const toggleNavListHandler = () => {
		dispatch(navListActions.toggle());
	};
	const navListBtn = navList.map((data) => (
		<li key={data.id}>
			<NavLink to={`${data.link}`}>
				{data.icon}
				<p>{data.title}</p>
			</NavLink>
		</li>
	));
	const seeMoreNavListBtn = seeMoreNavList.map((data) => (
		<li key={data.id}>
			<NavLink to={`${data.link}`}>
				{data.icon}
				<p>{data.title}</p>
			</NavLink>
		</li>
	));
	return (
		<>
			<nav className={classes.navList}>
				<ul>
					{navListBtn}
					{toggleNavList && seeMoreNavListBtn}
					<li className={classes.seeMore} onClick={toggleNavListHandler}>
						<div>
							{!toggleNavList && (
								<>
									<IoIosArrowDropdown />
									<p>See more</p>
								</>
							)}
							{toggleNavList && (
								<>
									<IoIosArrowDropup />
									<p>See Less</p>
								</>
							)}
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default NavList;

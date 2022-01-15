import { NavLink } from "react-router-dom";
import classes from "./NavList.module.css";

import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { RiStarHalfLine } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import {
	IoIosArrowDropdown,
	IoIosStopwatch,
	IoMdBookmark,
	IoIosFlag,
} from "react-icons/io";
import {
	MdOutlineBusinessCenter,
	MdRecentActors,
	MdOutlineMonitor,
} from "react-icons/md";

const NavList = () => {
	return (
		<>
			<div className={classes.navList}>
				<ul>
					<li>
						<NavLink to="user">
							<CgProfile />
							<p>test test</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<FaUserFriends />
							<p>Find friends</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<TiGroupOutline />
							<p>Group</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<MdOutlineMonitor />
							<p>Watch</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<IoIosStopwatch />
							<p>Memories</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<IoMdBookmark />
							<p>Saved</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<IoIosFlag />
							<p>Pages</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<BsCalendarEvent />
							<p>Events</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<MdOutlineBusinessCenter />
							<p>Jobs</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<MdRecentActors />
							<p>Most recent</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="user">
							<RiStarHalfLine />
							<p>Favorites</p>
						</NavLink>
					</li>
					<li className={classes.seeMore}>
						<div>
							<IoIosArrowDropdown />
							<p>see more</p>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};
export default NavList;

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { navListActions } from "../../store/navList-slice";
import classes from "./NavList.module.css";

import { CgProfile } from "react-icons/cg";
import {
	FaUserFriends,
	FaHandHoldingHeart,
	FaHeartbeat,
	FaSchool,
} from "react-icons/fa";
import { TiGroupOutline, TiWeatherPartlySunny } from "react-icons/ti";
import { RiStarHalfLine } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import {
	IoIosArrowDropdown,
	IoIosStopwatch,
	IoMdBookmark,
	IoIosFlag,
	IoIosArrowDropup,
} from "react-icons/io";
import {
	MdOutlineBusinessCenter,
	MdRecentActors,
	MdOutlineMonitor,
	MdVideogameAsset,
	MdPayment,
	MdOutlineLiveHelp,
	MdScience,
} from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { AiFillPicture } from "react-icons/ai";
import { SiOculus, SiFacebookgaming } from "react-icons/si";
import { BiMessageRoundedMinus, BiMessageRoundedDetail } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";

const NavList = () => {
	const dispatch = useDispatch();
	const toggleNavList = useSelector((state) => state.navList.navListIsVisible);
	const toggleNavListHandler = () => {
		dispatch(navListActions.toggle());
	};
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
					{toggleNavList && (
						<>
							<li>
								<NavLink to="user">
									<GoGraph />
									<p>Ads Manager</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<FaSchool />
									<p>Campus</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<MdScience />
									<p>Climate science center</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<MdOutlineLiveHelp />
									<p>Community Help</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<FaHeartbeat />
									<p>COVID-19 Information Center</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<MdPayment />
									<p>Goodbook Pay</p>
								</NavLink>
							</li>
						</>
					)}
					<li>
						<NavLink to="user">
							<RiStarHalfLine />
							<p>Favorites</p>
						</NavLink>
					</li>
					{toggleNavList && (
						<>
							<li>
								<NavLink to="user">
									<FaHandHoldingHeart />
									<p>Fundraisers</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<SiFacebookgaming />
									<p>Gaming Video</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<CgMediaLive />
									<p>Live videos</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<BiMessageRoundedMinus />
									<p>Messenger</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<BiMessageRoundedDetail />
									<p>Messenger Kids</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<MdVideogameAsset />
									<p>Play Games</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<SiOculus />
									<p>Quest</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<AiFillPicture />
									<p>Recent ad activity</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="user">
									<TiWeatherPartlySunny />
									<p>Weather</p>
								</NavLink>
							</li>
						</>
					)}
					{!toggleNavList && (
						<li className={classes.seeMore} onClick={toggleNavListHandler}>
							<div>
								<IoIosArrowDropdown />
								<p>See more</p>
							</div>
						</li>
					)}
					{toggleNavList && (
						<li className={classes.seeMore} onClick={toggleNavListHandler}>
							<div>
								<IoIosArrowDropup />
								<p>See Less</p>
							</div>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};
export default NavList;

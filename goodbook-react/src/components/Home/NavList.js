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

const navList = [
	{
		id: "nav1", link: "/user", icon: <CgProfile />, title: "test"
	},
	{
		id: "nav2", link: "/find_friend", icon: <FaUserFriends />, title: "Find friends"
	},
	{
		id: "nav3", link: "/group", icon: <TiGroupOutline />, title: "Group"
	},
	{
		id: "nav4", link: "/watch", icon: <MdOutlineMonitor />, title: "Watch"
	},
	{
		id: "nav5", link: "/memories", icon: <IoIosStopwatch />, title: "Memories"
	},
	{
		id: "nav6", link: "/saved", icon: <IoMdBookmark />, title: "Saved"
	},
	{
		id: "nav7", link: "/pages", icon: <IoIosFlag />, title: "Pages"
	},
	{
		id: "nav8", link: "/events", icon: <BsCalendarEvent />, title: "Events"
	},
	{
		id: "nav9", link: "/jobs", icon: <MdOutlineBusinessCenter />, title: "Jobs"
	},
	{
		id: "nav10", link: "/most_recent", icon: <MdRecentActors />, title: "Most recent"
	},
]
const seeMoreNavList = [
	{
		id: "seeMoreNav1", link: "/favorites", icon: <RiStarHalfLine />, title: "Favorites"
	},
	{
		id: "seeMoreNav2", link: "/ads_manage", icon: <GoGraph />, title: "Ads Manager"
	},
	{
		id: "seeMoreNav3", link: "/campus", icon: <FaSchool />, title: "Campus"
	},
	{
		id: "seeMoreNav4", link: "/science", icon: <MdScience />, title: "Climate science center"
	},
	{
		id: "seeMoreNav5", link: "/community_help", icon: <MdOutlineLiveHelp />, title: "Community Help"
	},
	{
		id: "seeMoreNav6", link: "/covid-19", icon: <FaHeartbeat />, title: "COVID-19 Information Center"
	},
	{
		id: "seeMoreNav7", link: "/pay", icon: <MdPayment />, title: "GoodBook pay"
	},
	{
		id: "seeMoreNav8", link: "/fundraisers", icon: <FaHandHoldingHeart />, title: "Fundraisers"
	},
	{
		id: "seeMoreNav9", link: "/gaming_video", icon: <SiFacebookgaming />, title: "Gaming video"
	},
	{
		id: "seeMoreNav10", link: "/live_video", icon: <CgMediaLive />, title: "Live videos"
	},
	{
		id: "seeMoreNav11", link: "/messenger", icon: <BiMessageRoundedMinus />, title: "Messenger"
	},
	{
		id: "seeMoreNav12", link: "/messenger_kids", icon: <BiMessageRoundedDetail />, title: "Messenger Kids"
	},
	{
		id: "seeMoreNav13", link: "/play_games", icon: <MdVideogameAsset />, title: "Play games"
	},
	{
		id: "seeMoreNav14", link: "/quest", icon: <SiOculus />, title: "Quest"
	},
	{
		id: "seeMoreNav15", link: "/activity", icon: <AiFillPicture />, title: "Recent ad activity"
	},
	{
		id: "seeMoreNav16", link: "/weather", icon: <TiWeatherPartlySunny />, title: "Weather"
	},
]
const NavList = () => {
	const dispatch = useDispatch();
	const toggleNavList = useSelector((state) => state.navList.navListIsVisible);
	const toggleNavListHandler = () => {
		dispatch(navListActions.toggle());
	};
	const navListBtn = navList.map(data => (
		<li key={data.id}>
			<NavLink to={`${data.link}`}>
				{data.icon}
				<p>{data.title}</p>
			</NavLink>
		</li>
	))
	const seeMoreNavListBtn = seeMoreNavList.map(data => (
		<li key={data.id}>
			<NavLink to={`${data.link}`}>
				{data.icon}
				<p>{data.title}</p>
			</NavLink>
		</li>
	))
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

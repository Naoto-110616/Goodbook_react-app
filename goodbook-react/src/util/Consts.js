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
import { IoIosStopwatch, IoMdBookmark, IoIosFlag } from "react-icons/io";
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

export const CUSTOM_GENDER = [
	{
		value: 1,
		gender: "Select your pronoun",
	},
	{
		value: 2,
		gender: 'She:"Wish her a happy birthday!"',
	},
	{
		value: 3,
		gender: 'He: "Wish him a happy birthday!',
	},
	{
		value: 4,
		gender: 'They:"Wish them a happy birthday!"',
	},
];

export const today = new Date().getDate();
export const birthYear = new Date().getFullYear();
export const birthMonth = new Date().getMonth() + 1;

export const setYear = () => {
	let list = [];
	for (let i = 1900; i <= new Date().getFullYear(); i++) {
		list.push(
			<option key={`year_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};
export const setMonth = () => {
	let list = [];
	for (let i = 1; i <= 12; i++) {
		list.push(
			<option key={`month_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};
export const setDay = () => {
	let list = [];
	const lastDay = new Date(Number(birthYear), Number(birthMonth), 0).getDate();
	for (let i = 1; i <= lastDay; i++) {
		list.push(
			<option key={`day_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};

export const navList = [
	{
		id: "nav1",
		link: "/user",
		icon: <CgProfile />,
		title: "test",
	},
	{
		id: "nav2",
		link: "/find_friend",
		icon: <FaUserFriends />,
		title: "Find friends",
	},
	{
		id: "nav3",
		link: "/group",
		icon: <TiGroupOutline />,
		title: "Group",
	},
	{
		id: "nav4",
		link: "/watch",
		icon: <MdOutlineMonitor />,
		title: "Watch",
	},
	{
		id: "nav5",
		link: "/memories",
		icon: <IoIosStopwatch />,
		title: "Memories",
	},
	{
		id: "nav6",
		link: "/saved",
		icon: <IoMdBookmark />,
		title: "Saved",
	},
	{
		id: "nav7",
		link: "/pages",
		icon: <IoIosFlag />,
		title: "Pages",
	},
	{
		id: "nav8",
		link: "/events",
		icon: <BsCalendarEvent />,
		title: "Events",
	},
	{
		id: "nav9",
		link: "/jobs",
		icon: <MdOutlineBusinessCenter />,
		title: "Jobs",
	},
	{
		id: "nav10",
		link: "/most_recent",
		icon: <MdRecentActors />,
		title: "Most recent",
	},
];
export const seeMoreNavList = [
	{
		id: "seeMoreNav1",
		link: "/favorites",
		icon: <RiStarHalfLine />,
		title: "Favorites",
	},
	{
		id: "seeMoreNav2",
		link: "/ads_manage",
		icon: <GoGraph />,
		title: "Ads Manager",
	},
	{
		id: "seeMoreNav3",
		link: "/campus",
		icon: <FaSchool />,
		title: "Campus",
	},
	{
		id: "seeMoreNav4",
		link: "/science",
		icon: <MdScience />,
		title: "Climate science center",
	},
	{
		id: "seeMoreNav5",
		link: "/community_help",
		icon: <MdOutlineLiveHelp />,
		title: "Community Help",
	},
	{
		id: "seeMoreNav6",
		link: "/covid-19",
		icon: <FaHeartbeat />,
		title: "COVID-19 Information Center",
	},
	{
		id: "seeMoreNav7",
		link: "/pay",
		icon: <MdPayment />,
		title: "GoodBook pay",
	},
	{
		id: "seeMoreNav8",
		link: "/fundraisers",
		icon: <FaHandHoldingHeart />,
		title: "Fundraisers",
	},
	{
		id: "seeMoreNav9",
		link: "/gaming_video",
		icon: <SiFacebookgaming />,
		title: "Gaming video",
	},
	{
		id: "seeMoreNav10",
		link: "/live_video",
		icon: <CgMediaLive />,
		title: "Live videos",
	},
	{
		id: "seeMoreNav11",
		link: "/messenger",
		icon: <BiMessageRoundedMinus />,
		title: "Messenger",
	},
	{
		id: "seeMoreNav12",
		link: "/messenger_kids",
		icon: <BiMessageRoundedDetail />,
		title: "Messenger Kids",
	},
	{
		id: "seeMoreNav13",
		link: "/play_games",
		icon: <MdVideogameAsset />,
		title: "Play games",
	},
	{
		id: "seeMoreNav14",
		link: "/quest",
		icon: <SiOculus />,
		title: "Quest",
	},
	{
		id: "seeMoreNav15",
		link: "/activity",
		icon: <AiFillPicture />,
		title: "Recent ad activity",
	},
	{
		id: "seeMoreNav16",
		link: "/weather",
		icon: <TiWeatherPartlySunny />,
		title: "Weather",
	},
];

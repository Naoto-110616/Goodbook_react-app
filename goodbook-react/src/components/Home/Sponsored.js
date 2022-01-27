import classes from "./Sponsored.module.css";

import GitHubIcon from "../../image/post/62789423.png";
import PortfolioIcon from "../../image/post/IMG_2080.jpg";

import { HiOutlinePlus } from "react-icons/hi";

const sponsoredList = [
	{
		id: "s1",
		img: GitHubIcon,
		sponsoredName: "My GitHub",
		sponsoredAnchor: "https://github.com/Naoto-110616",
		anchorName: "github.com",
	},
	{
		id: "s2",
		img: PortfolioIcon,
		sponsoredName: "My Portfolio",
		sponsoredAnchor: "https://portfolio-page-react.web.app",
		anchorName: "portfolio",
	},
];

const Sponsored = () => {
	const sponsored = sponsoredList.map((data) => (
		<div key={data.id}>
			<a className={classes.sponsoredColumn} href={data.sponsoredAnchor}>
				<div className={classes.sponsoredColumnImg}>
					<img src={data.img} alt={data.sponsoredName} />
				</div>
				<div>
					<p>{data.sponsoredName}</p>
					<p>{data.anchorName}</p>
				</div>
			</a>
		</div>
	));
	return (
		<>
			<div className={classes.sponsored}>
				<p>Sponsored</p>
				{sponsored}
				<div className={classes.groupConversations}>
					<p>Group conversations</p>
					<div className={classes.createConversationsBtn}>
						<HiOutlinePlus />
						<p>Create new group</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sponsored;

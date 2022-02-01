import classes from "./SubMenu.module.css";

import { CgProfile, CgDarkMode } from "react-icons/cg";
import {
	MdFeedback,
	MdHelp,
	MdLogout,
	MdArrowForwardIos,
} from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";

const SubMenu = () => {
	return (
		<>
			<div className={classes.subMenu}>
				<div className={classes.profile}>
					<CgProfile />
					<div>
						<p>Name</p>
						<p>See Your profile</p>
					</div>
				</div>
				<div className={classes.feedback}>
					<MdFeedback />
					<div>
						<p>Give feedback</p>
						<p>Help us improve Facebook.</p>
					</div>
				</div>
				<div>
					<ul>
						<li>
							<BsFillGearFill />
							<p>Setting & privacy</p>
							<MdArrowForwardIos className={classes.arrow} />
						</li>
						<li>
							<MdHelp />
							<p>Help & Support</p>
							<MdArrowForwardIos className={classes.arrow} />
						</li>
						<li>
							<CgDarkMode />
							<p>Display & Accessibility</p>
							<MdArrowForwardIos className={classes.arrow} />
						</li>
						<li>
							<MdLogout />
							<p>Log Out</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default SubMenu;
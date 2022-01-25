import classes from "./Post.module.css";

import { HiOutlinePlus, HiVideoCamera, HiPhotograph } from "react-icons/hi";
import { CgProfile, CgSmile } from "react-icons/cg";

const Post = () => {
	return (
		<>
			<div className={classes.post}>
				<div className={classes.createBtn}>
					<HiOutlinePlus />
					<div>
						<p>Create Story</p>
						<p className={classes.share}>share a photo or write something.</p>
					</div>
				</div>
				<div className={classes.postBtnWrap}>
					<div className={classes.postBtn}>
						<CgProfile />
						<button>What's on your mind, test?</button>
					</div>
					<div className={classes.postList}>
						<ul>
							<li>
								<HiVideoCamera />
								<p>Live video</p>
							</li>
							<li>
								<HiPhotograph />
								<p>Photo/video</p>
							</li>
							<li>
								<CgSmile />
								<p>Feeling/activity</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;

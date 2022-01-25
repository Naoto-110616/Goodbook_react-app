import classes from "./Post.module.css";

import { HiOutlinePlus, HiVideoCamera, HiPhotograph } from "react-icons/hi";
import { CgProfile, CgSmile } from "react-icons/cg";
import PostCard from "./PostCard/PostCard";

const Post = () => {
	return (
		<>
			<div className={classes.post}>
				<div className={classes.createBtn}>
					<HiOutlinePlus />
					<PostCard>
						<p>Create Story</p>
						<p className={classes.share}>share a photo or write something.</p>
					</PostCard>
				</div>
				<div>
					<div>
						<CgProfile />
						<button>What's on your mind, test?</button>
					</div>
					<div>
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

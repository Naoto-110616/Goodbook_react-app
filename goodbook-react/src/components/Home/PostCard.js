import classes from "./PostCard.module.css";

import {
	BsThreeDots,
	BsHandThumbsUp,
	BsHandThumbsUpFill,
} from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { FaShare } from "react-icons/fa";

import amazonIcon from "../../image/icon/amazon-icon.svg";
import post from "../../image/post/demo.jpeg";

const PostCard = () => {
	return (
		<div className={classes.postCard}>
			<div className={classes.postCardDetail}>
				<div className={classes.postUser}>
					<div className={classes.postIcon}>
						<img src={amazonIcon} alt="icon" />
					</div>
					<div>
						<p>Amazon.co.jp(アマゾン)</p>
						<p className={classes.postTime}>Yesterday at 1:33PM</p>
					</div>
				</div>
				<BsThreeDots className={classes.threeDots} />
			</div>
			<div className={classes.postSentence}>
				<p>
					Amazon WoW 日本でスタート✨ https://amazonwowjapan.splashthat.com
					IT分野で長期キャリア形成を目指す女子学生を主な対象としたネットワーキング・プラットフォーム
					#AmazonWoW
					によりエンジニア社員によるコーチングや、アップスキリングの機会を提供し、Amazon、AWSの技術職リーダー、リクルーターと学生を繋ぎます
					https://prtimes.jp/main/html/rd/p/000001431.000004612.html
				</p>
			</div>
			<div className={classes.postImg}>
				<img src={post} alt="post" />
			</div>
			<div className={classes.postActionWrap}>
				<div className={classes.likeShareNum}>
					<div className={classes.likeNum}>
						<BsHandThumbsUp className={classes.like} />
						30
					</div>
					<div>
						<p>1 Share</p>
					</div>
				</div>
				<div className={classes.postAction}>
					<ul>
						<li>
							<BsHandThumbsUpFill />
							<p>Like</p>
						</li>
						<li>
							<VscComment />
							<p>Comment</p>
						</li>
						<li>
							<FaShare />
							<p>Share</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PostCard;

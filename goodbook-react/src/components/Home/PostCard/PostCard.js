import classes from "./PostCard.module.css";

const PostCard = (props) => {
	<div className={classes.postCard}>{props.children}</div>;
};

export default PostCard;

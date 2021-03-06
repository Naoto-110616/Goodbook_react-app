import Header from "./Header/Header";
import classes from "./Layout.module.css";

import { subMenuActions } from "../../store/subMenu-slice";
import { useDispatch } from "react-redux";

const Layouts = (props) => {
	const dispatch = useDispatch();
	const subMenuCloseHandler = () => {
		dispatch(subMenuActions.close());
	};
	return (
		<>
			<Header />
			<main className={classes.main} onClick={subMenuCloseHandler}>
				{props.children}
			</main>
		</>
	);
};

export default Layouts;

import Header from "../UI/Header/Header";
import classes from "./Layout.module.css";
const Layouts = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	);
};

export default Layouts;

import NavList from "../components/Home/NavList";
import Post from "../components/Home/Post";
import Layouts from "../components/Layout/Layouts";

import classes from "./Home.module.css";

const Home = () => {
	return (
		<>
			<Layouts>
				<section className={classes.section}>
					<NavList />
					<Post />
				</section>
			</Layouts>
		</>
	);
};
export default Home;

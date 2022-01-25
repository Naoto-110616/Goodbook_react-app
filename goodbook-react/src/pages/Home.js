import Layouts from "../components/Layout/Layouts";

import NavList from "../components/Home/NavList";
import Post from "../components/Home/Post";
import Sponsored from "../components/Home/Sponsored";

import MediaQuery from "react-responsive";

import classes from "./Home.module.css";

const Home = () => {
	return (
		<>
			<Layouts>
				<section className={classes.section}>
					<MediaQuery query="(min-width:767px)">
						<NavList />
					</MediaQuery>
					<Post />
					<Sponsored />
				</section>
			</Layouts>
		</>
	);
};
export default Home;

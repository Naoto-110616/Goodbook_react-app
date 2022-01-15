import NavList from "../components/Home/NavList";
import Post from "../components/Home/Post";
import Layouts from "../components/Layout/Layouts";

const Home = () => {
	return (
		<>
			<Layouts>
				<section>
					<NavList />
					<Post />
				</section>
			</Layouts>
		</>
	);
};
export default Home;

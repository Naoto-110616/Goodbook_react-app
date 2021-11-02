import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Singup.module.css";
const Singup = () => {
	return (
		<form className={classes.singup}>
			<div>
				<h2>Sing Up</h2>
				<p>It’s quick and easy.</p>
				<div className={classes.name}>
					<Input />
					<Input />
				</div>
				<Input />
				<Input />
				<div className={classes.birthday}>
					<Input />
					<Input />
					<Input />
				</div>
				<div className={classes.gender}>
					<Input />
					<Input />
					<Input />
				</div>
				<Button>Sing Up</Button>
			</div>
		</form>
	);
};
export default Singup;

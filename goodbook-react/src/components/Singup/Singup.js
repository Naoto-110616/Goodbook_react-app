import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./Singup.module.css";
const Singup = () => {
	return (
		<Modal>
			<form className={classes.singup}>
				<div>
					<div className={classes["singup-text"]}>
						<div>
							<h2>Sing Up</h2>
							<p>It’s quick and easy.</p>
						</div>
						<div className={classes["singup-x"]}>
							<i class="far fa-times-circle"></i>
						</div>
					</div>
					<div className={classes.name}>
						<Input input={{ placeholder: "First name" }} />
						<Input input={{ placeholder: "Last name" }} />
					</div>
					<Input input={{ placeholder: "Mobile number or email" }} />
					<Input input={{ placeholder: "New password" }} />
					<div className={classes.birthday}></div>
					<div className={classes.gender}>
						<Input
							label="Female"
							input={{
								type: "radio",
								name: "gender",
								value: "Female",
							}}
						/>
						<Input
							label="Male"
							input={{
								type: "radio",
								name: "gender",
								value: "Male",
							}}
						/>
						<Input
							label="Custom"
							input={{
								type: "radio",
								name: "gender",
								value: "Custom",
							}}
						/>
					</div>
					<Button>Sing Up</Button>
				</div>
			</form>
		</Modal>
	);
};
export default Singup;

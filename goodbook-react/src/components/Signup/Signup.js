import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import classes from "./Signup.module.css";
import CustomeGender from "./CustomGender/CustomeGender";
import { MONTH, DAY, YEAR } from "../../util/Consts";

const Signup = (props) => {
	const month = MONTH.map((data) => (
		<option value={data.value}>{data.month}</option>
	));
	const day = DAY.map((data) => <option value={data}>{data}</option>);
	const year = YEAR.map((data) => <option value={data}>{data}</option>);

	const [isOpenGender, setIsOpenGender] = useState(false);

	const customeGenderOpenHandler = () => {
		setIsOpenGender(true);
	};
	const customeGenderCloseHandler = () => {
		setIsOpenGender(false);
	};

	return (
		<Modal>
			<form className={classes.signup}>
				<div>
					<div className={classes["signup-text"]}>
						<div>
							<h2>Sing Up</h2>
							<p>It’s quick and easy.</p>
						</div>
						<div className={classes["signup-x"]}>
							<i onClick={props.onClose} class="far fa-times-circle"></i>
						</div>
					</div>
					<Input signup={true} input={{ placeholder: "First name" }} />
					<Input signup={true} input={{ placeholder: "Last name" }} />
					<Input
						signup={true}
						input={{ placeholder: "Mobile number or email" }}
					/>
					<Input signup={true} input={{ placeholder: "New password" }} />
					<p className={classes["category-name"]}>Birthday</p>
					<div className={classes.birthday}>
						<Select signup={true} select={{ name: "month", title: "month" }}>
							{month}
						</Select>
						<Select signup={true} select={{ name: "day", title: "day" }}>
							{day}
						</Select>
						<Select signup={true} select={{ name: "year", title: "year" }}>
							{year}
						</Select>
					</div>
					<p className={classes["category-name"]}>Gender</p>
					<div className={classes.gender}>
						<Input
							onClick={customeGenderCloseHandler}
							label="Female"
							radio={true}
							input={{
								id: "radio1",
								type: "radio",
								name: "gender",
								value: "Female",
							}}
						/>
						<Input
							onClick={customeGenderCloseHandler}
							label="Male"
							radio={true}
							input={{
								id: "radio2",
								type: "radio",
								name: "gender",
								value: "Male",
							}}
						/>
						<Input
							onClick={customeGenderOpenHandler}
							label="Custom"
							radio={true}
							input={{
								id: "radio3",
								type: "radio",
								name: "gender",
								value: "Custom",
							}}
						/>
					</div>
					{isOpenGender && <CustomeGender />}
					<div className={classes["btn-wrap"]}>
						<Button signup={true}>Sing Up</Button>
					</div>
				</div>
			</form>
		</Modal>
	);
};
export default Signup;

import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import classes from "./Signup.module.css";
import CustomeGender from "./CustomGender/CustomeGender";

const Signup = (props) => {
	const [age, setAge] = useState(''); // birthYaer, Month, Dayをまとめたもの
	const [birthYear, setBirthYear] = useState(new Date().getFullYear());
	const [birthMonth, setBirthMonth] = useState(new Date().getMonth() + 1);
	const [birthDay, setBirthDay] = useState(new Date().getDay());

	const [isOpenGender, setIsOpenGender] = useState(false);

	const customeGenderOpenHandler = () => {
		setIsOpenGender(true);
	};
	const customeGenderCloseHandler = () => {
		setIsOpenGender(false);
	};
	const setYear = () => {
		let list = [];
		for (let i = 1900; i <= new Date().getFullYear(); i++) {
			list.push(<option key={`year_${i}`} value={i}>{i}</option>);
		}
		return list;
	}
	const setMonth = () => {
		let list = [];
		for (let i = 1; i <= 12; i++) {
			list.push(<option key={`month_${i}`} value={i}>{i}</option>);
		}
		return list;
	}
	const setDay = () => {
		let list = [];
		const lastday = new Date(Number(birthYear), Number(birthMonth), 0).getDate();
		for (let i = 1; i <= lastday; i++) {
			list.push(<option key={`day_${i}`} value={i}>{i}</option>);
		}
		return list;
	}

	return (
		<Modal onClose={props.onClose}>
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
							{setMonth()}
						</Select>
						<Select signup={true} select={{ name: "day", title: "day" }}>
							{setDay()}
						</Select>
						<Select signup={true} select={{ name: "year", title: "year" }}>
							{setYear()}
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

import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import classes from "./Signup.module.css";
import CustomGender from "./CustomGender/CustomGender";
import Form from "../UI/Form/Form";

const Signup = (props) => {
	const today = new Date().getDate();
	const birthYear = new Date().getFullYear();
	const birthMonth = new Date().getMonth() + 1;
	const [openGender, setOpenGender] = useState(false);

	const customGenderOpenHandler = () => {
		setOpenGender(true);
	};
	const customGenderCloseHandler = () => {
		setOpenGender(false);
	};

	const setYear = () => {
		let list = [];
		for (let i = 1900; i <= new Date().getFullYear(); i++) {
			list.push(
				<option key={`year_${i}`} value={i}>
					{i}
				</option>
			);
		}
		return list;
	};
	const setMonth = () => {
		let list = [];
		for (let i = 1; i <= 12; i++) {
			list.push(
				<option key={`month_${i}`} value={i}>
					{i}
				</option>
			);
		}
		return list;
	};
	const setDay = () => {
		let list = [];
		const lastDay = new Date(
			Number(birthYear),
			Number(birthMonth),
			0
		).getDate();
		for (let i = 1; i <= lastDay; i++) {
			list.push(
				<option key={`day_${i}`} value={i}>
					{i}
				</option>
			);
		}
		return list;
	};

	const submitSignupHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Modal onClose={props.onClose}>
			<Form className={classes.signup} onSubmit={submitSignupHandler}>
				<div>
					<div className={classes["signup-text"]}>
						<div>
							<h2>Sing Up</h2>
							<p>It's quick and easy.</p>
						</div>
						<div className={classes["signup-x"]}>
							<i onClick={props.onClose} className="far fa-times-circle"></i>
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
						<Select
							signup={true}
							select={{ name: "month", title: "month", value: birthMonth }}
						>
							{setMonth()}
						</Select>
						<Select
							signup={true}
							select={{ name: "day", title: "day", value: today }}
						>
							{setDay()}
						</Select>
						<Select
							signup={true}
							select={{ name: "year", title: "year", value: birthYear }}
						>
							{setYear()}
						</Select>
					</div>
					<p className={classes["category-name"]}>Gender</p>
					<div className={classes.gender}>
						<Input
							onClick={customGenderCloseHandler}
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
							onClick={customGenderCloseHandler}
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
							onClick={customGenderOpenHandler}
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
					{openGender && <CustomGender />}
					<div className={classes["btn-wrap"]}>
						<Button signup={true}>Sing Up</Button>
					</div>
				</div>
			</Form>
		</Modal>
	);
};
export default Signup;

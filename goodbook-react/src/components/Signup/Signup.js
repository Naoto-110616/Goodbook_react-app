import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import classes from "./Signup.module.css";
import CustomGender from "./CustomGender/CustomGender";
import Form from "../UI/Form/Form";
import { customGenderActions } from "../../store/customGender-slice";
import {
	today,
	birthYear,
	birthMonth,
	setYear,
	setMonth,
	setDay,
} from "../../util/Consts";
const Signup = (props) => {
	const dispatch = useDispatch();
	const toggleCustomGender = useSelector(
		(state) => state.customGender.customGenderIsVisible
	);
	const customGenderOpenHandler = () => {
		dispatch(customGenderActions.open());
	};
	const customGenderCloseHandler = () => {
		dispatch(customGenderActions.close());
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
					{toggleCustomGender && <CustomGender />}
					<div className={classes["btn-wrap"]}>
						<Button signup={true}>Sing Up</Button>
					</div>
				</div>
			</Form>
		</Modal>
	);
};
export default Signup;

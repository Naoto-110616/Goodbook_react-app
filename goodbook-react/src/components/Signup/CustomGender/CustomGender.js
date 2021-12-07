import classes from "./CustomGender.module.css";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import { CUSTOM_GENDER } from "../../../util/Consts";

const CustomGender = () => {
	const custom_gender = CUSTOM_GENDER.map((data) => (
		<option value={data.value}>{data.gender}</option>
	));
	return (
		<>
			<div className={classes.select}>
				<Select>{custom_gender}</Select>
			</div>
			<p className={classes["gender-message"]}>
				Your pronoun is visible to everyone.
			</p>
			<Input
				signup={true}
				input={{ id: "gender", type: "text", placeholder: "Gender(optional)" }}
			/>
			<p className={classes["gender-message"]}>
				By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
				Policy. You may receive SMS Notifications from us and can opt out any
				time.
			</p>
		</>
	);
};

export default CustomGender;

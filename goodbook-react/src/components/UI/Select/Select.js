import classes from "./Select.module.css";

const Select = (props) => {
	return (
		<select
			className={`${classes.select} ${props.signup && classes.signup}`}
			{...props.select}
		>
			{props.children}
		</select>
	);
};

export default Select;

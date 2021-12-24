import classes from "./Input.module.css";

const Input = (props) => {

	const inputClassesWrap = `${classes.input} ${props.radio && classes.radio}`;
	const inputClasses = `${props.className} ${props.login && classes.login} ${props.signup && classes.signup}`

	return (
		<div className={inputClassesWrap}>
			{props.label && <label htmlFor={props.input.id}>{props.label}</label>}
			<input
				onClick={props.onClick}
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
				className={inputClasses}
				{...props.input}
			/>
		</div>
	);
};
export default Input;

import classes from "./Input.module.css";

const Input = (props) => {

	const inputClassWrap = `${classes.input} ${props.radio && classes.radio}`;
	const inputClass = `${props.className} ${props.login && classes.login} ${props.signup && classes.signup}`

	return (
		<div className={inputClassWrap}>
			{props.label && <label htmlFor={props.input.id}>{props.label}</label>}
			<input
				onClick={props.onClick}
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
				className={inputClass}
				{...props.input}
			/>
		</div>
	);
};
export default Input;

import classes from "./Input.module.css";

const Input = (props) => {
	return (
		<div className={`${classes.input} ${props.radio && classes.radio}`}>
			{props.label && <label htmlFor={props.input.id}>{props.label}</label>}
			<input
				onClick={props.onClick}
				className={`${props.login && classes.login} ${props.signup && classes.signup
					}`}
				{...props.input}
			/>
		</div>
	);
};
export default Input;

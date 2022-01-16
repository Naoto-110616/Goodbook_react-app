import classes from "./Button.module.css";

const Button = (props) => {
	const buttonClasses = `${classes.button} ${props.signup && classes.signup}`;

	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}
			className={buttonClasses}
		>
			{props.children}
		</button>
	);
};
export default Button;

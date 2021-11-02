import classes from "./Input.module.css";

const Input = (props) => {
	return (
		<div className={classes.input}>
			{props.label && <label htmlFor={props.input.id}>{props.label}</label>}
			<input className={props.className} {...props.input} />
		</div>
	);
};
export default Input;

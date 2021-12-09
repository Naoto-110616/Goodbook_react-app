import classes from "./Form.module.css"

const Form = (props) => {
    return <form type={props.type} className={classes.form}>{props.children}</form>
}

export default Form;
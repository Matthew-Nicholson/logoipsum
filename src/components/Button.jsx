import classes from "./Button.module.scss";

const Button = ({ type = "base", children }) => {
  let buttonType = `button-${type}`;
  return <button className={`${classes.button} ${classes[buttonType]}`}>{children}</button>;
};

export default Button;
